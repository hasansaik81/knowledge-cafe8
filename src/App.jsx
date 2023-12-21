import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Answer from './Components/Answer/Answer'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

    const toastMessage = (message) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 2000, // 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    toastMessage('Bookmark added again')
    // if(newBookmarks==1){
    //   toastMessage(false)
    // }else{
    //   toastMessage(true)
    // }
  }


  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // console.log('Remove bookmark', id);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }


  return (
    <>
      <Header></Header>
      <main className='md:flex gap-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        <ToastContainer></ToastContainer>
      </main>
      <Answer></Answer>
    </>
  )
}

export default App
