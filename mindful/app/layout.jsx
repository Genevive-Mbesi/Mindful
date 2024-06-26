import '@styles/global.css';
import Nav from '@components/nav';

export const metadata = {
    title:'Mindful',
    description:'A wellness application that helps understand and deal with emotions'
}

const RootLayout = ({children}) => {
  return (
   <html lang='eng'>
    <body className='bg-slate-900'>
        <div className='main'>
            <div className='gradient'>
                <main className='app'>
                    <Nav/>
                    {children}

                </main>

            </div>

        </div>
    </body>

   </html>
  )
}

export default RootLayout
