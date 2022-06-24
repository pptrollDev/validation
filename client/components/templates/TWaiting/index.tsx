import dayjs from 'dayjs'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useRef, useState } from 'react'
import { useCertificationState } from '../../../context/Certification'
import {
  useEasySignDispatch,
  useEasySignState,
} from '../../../context/EasySign'
import Waiting from '../../organisms/Waiting'
import { IGuide } from '../../organisms/Waiting/type'

const TWaiting = () => {
  const router = useRouter()
  const certification = useCertificationState()
  const easySignState = useEasySignState()
  const easySignDispatch = useEasySignDispatch()
  const [windowConfirm, setWindowConfirm] = useState<boolean>()
  const [serverTime, setServerTime] = useState<Date>()
  const [minute, setMinute] = useState<string>()
  const [second, setSecond] = useState<string>()
  const [time, setTime] = useState<number>()
  const timer = useRef<number>(0)
  const [guides, setGuides] = useState<IGuide[]>([])

  useEffect(() => {
    if (easySignState && certification) {
      const startedAt = dayjs(easySignState.startedAt)
      const expiredAt = dayjs(easySignState.expiredAt)
      timer.current = expiredAt.diff(startedAt) / 1000
      setTime(parseInt(timer.current.toString()))

      getServerTime()
      getEasysignGuides()

      const interval = setInterval(() => {
        if (timer.current > -1) {
          const tempMinute = convertDigitNumber(
            parseInt((timer.current / 60).toString()),
          )
          const tempSecond = convertDigitNumber(timer.current % 60)
          setMinute(tempMinute)
          setSecond(tempSecond)
          setTime(parseInt(timer.current.toString()))

          timer.current -= 1
        }
      }, 1000)
      return () => clearInterval(interval)
    } else router.push('/')
  }, [])

  useEffect(() => {
    if (time !== undefined && time === 0) {
      setWindowConfirm(
        window.confirm(
          '인증요청 시간이 지났습니다.\n간편인증을 다시 시도해 주세요.',
        ),
      )
    }
  }, [time])

  useEffect(() => {
    if (serverTime && easySignState) {
      const serverTimeAt = dayjs(serverTime)
      const expiredAt = dayjs(easySignState.expiredAt)
      const timeDiff = serverTimeAt.diff(expiredAt)

      if (timeDiff > 0) {
        setWindowConfirm(
          window.confirm(
            '인증요청 시간이 지났습니다.\n간편인증을 다시 시도해 주세요.',
          ),
        )
      }
    }
  }, [serverTime])

  useEffect(() => {
    if (windowConfirm === undefined) return

    if (windowConfirm) postEasysignRequest()
    else router.push('/')
  }, [windowConfirm])

  const getServerTime = () => {
    fetch(`${process.env.URL}/serverTime`)
      .then((res) => res.json())
      .then((res) => {
        setServerTime(res.data.serverTime)
      })
  }

  const getEasysignGuides = () => {
    fetch(`${process.env.URL}/easysign/guides`)
      .then((res) => res.json())
      .then((res) => {
        setGuides(res.data.easysign.guides)
      })
  }

  const postEasysignRequest = () => {
    fetch(`${process.env.URL}/easysign/request`, {
      method: 'post',
    })
      .then((res) => res.json())
      .then((res) => {
        easySignDispatch({ type: 'createEasySign', data: res.data })

        const startedAt = dayjs(res.data.startedAt)
        const expiredAt = dayjs(res.data.expiredAt)

        timer.current = expiredAt.diff(startedAt) / 1000
        setTime(parseInt(timer.current.toString()))
      })
  }

  const postEasysignComplete = () => {
    fetch(`${process.env.URL}/easysign/complete`, {
      method: 'post',
      body: JSON.stringify(certification),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          window.alert(res.error.message)
          router.push('/')
          return
        }

        router.push('/complete')
      })
  }

  const convertDigitNumber = (number: number) => {
    if (number < 10) return '0' + number.toString()

    return number.toString()
  }

  return minute !== undefined && second !== undefined && time !== undefined ? (
    <Waiting
      guides={guides}
      minute={minute}
      second={second}
      time={time}
      submit={() => {
        postEasysignComplete()
      }}
    />
  ) : null
}

export default TWaiting
