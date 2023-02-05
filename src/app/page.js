import { ListTrainings } from '@/components/ListTrainings'
import Image from 'next/image'

const getData = async () => {
  const data = await fetch("http://localhost:3000/api/trainings")

  return data.json()
}

export default async function Home() {
  const trainings = await getData()

  return (
    <main className='p-2'>
      <ListTrainings trainings={trainings} />
    </main>
  )
}
