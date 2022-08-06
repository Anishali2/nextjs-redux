import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/userAction'
export default function Home() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleClick = () => {
    dispatch(addTodo('test'))
  }
  return (
    <>
    <button onClick={() => handleClick()}>Hello Next js</button>
      </>

  )
}
