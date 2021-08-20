import type { NextPage } from 'next'
import IngridientForm from '../components/home/IngridientForm'
import { connectToDatabase } from '../lib/mongodb'


interface Props {
  isConnected: boolean;
}

const Home: NextPage<Props> = ({ isConnected }) => {
  return (
    <div>
      yahallo
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()
  console.log('---', client);

  return {
    props: { isConnected },
  }
}