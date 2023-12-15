import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()

  return (
    <>
    getServerSession result
      {session?.user?.name ? (
        <div>{session?.user.name}</div>
      ):
      (
        <div>not logged in</div>
      )}
    </>
  )
}
