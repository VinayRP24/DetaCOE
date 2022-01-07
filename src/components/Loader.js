import spinner from './images/spinner (1).gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader