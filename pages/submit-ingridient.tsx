import type { NextPage } from 'next'
import IngridientForm from '../components/home/IngridientForm'
// import { connectToDatabase } from '../lib/mongodb'


interface Props { }

const SubmitIngridient: NextPage<Props> = () => {
  return (
    <div>
      <IngridientForm />
    </div>
  )
}

export default SubmitIngridient
