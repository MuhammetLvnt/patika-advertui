import React from 'react'

import { Button } from 'advertui'
import 'advertui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type={'primary'} text='primary button' />
      <Button type={'default'} text='default button' />
      <Button type={'dashed'} text='dashed button' />
      <Button type={'text'} text='text button' />
      <Button type={'link'} text='link button' />
    </>
  )
}

export default App
