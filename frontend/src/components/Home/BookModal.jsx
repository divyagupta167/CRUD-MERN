import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'


const BookModal = ( { book, onClose } ) =>
{
  return (
    <div className="fixed  bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={ onClose }>
      <div
        onClick={ ( e ) => e.stopPropagation() }
        className='w-[600px] max-w-full   h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={ onClose }
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          { book.publishYear }
        </h2>
        <h4 className='my-2 text-gray-500'>
          { book._id }
        </h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{ book.title }</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{ book.author }</h2>
        </div>
        <p className="mt-4">More Details About Book</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi culpa repudiandae eaque eligendi nostrum ea eius dignissimos optio? Maxime culpa dolorem, magnam officia repellendus inventore! Saepe quod vel facilis quidem laudantium alias aut modi accusamus! Numquam nesciunt, et rerum quisquam pariatur harum libero deserunt sit perspiciatis reprehenderit at totam porro cum vero optio. Voluptatem commodi officiis corrupti assumenda. Quos libero officia expedita nisi dolor quasi accusamus, iusto impedit odio iure laborum distinctio dolore aliquam facere minima repudiandae assumenda, quaerat eveniet voluptates. Mollitia, error, tenetur fuga, nesciunt facere ipsam dolores ad inventore porro consectetur aspernatur pariatur consequuntur temporibus quaerat itaque?
        </p>
      </div>

    </div>
  )
}

export default BookModal