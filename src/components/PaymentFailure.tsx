import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const PaymentFailure = () => {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
        <img src="./paymentFailure.gif" alt="" className="md:h-60 md:w-60"/>
        <h1 className="text-red-600 font-bold text-2xl my-7">There occured a problem! Please Try again.</h1>
        <Link to="/">
        <Button size="large" variant="contained"  sx={{ backgroundColor: "#247674" }}>Go to Home page</Button>
        </Link>
    </div>
  )
}

export default PaymentFailure