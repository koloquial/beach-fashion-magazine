const Loading = ({children}) => {
    return (
        <div className='page-container'>
            <div className='loader' />
            <p>{children}</p>
        </div>
    )
}

export default Loading;