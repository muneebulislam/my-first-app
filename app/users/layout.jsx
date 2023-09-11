export const metadata = {
  title: {
    default: 'Users',
    template:'%s',
  },
    description: 'page for users'
};
export default function UsersLayout({ children }) {
  return (
    <>
    <main>
        {children}
    </main>
    </>
  )
}