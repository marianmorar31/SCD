function CollectionElement(props){
    
    return (
        <div className="card">
            <p>id: {props._id}</p>
            <p>floorPrice:{props.floorPrice}</p>
            <p>total_suply:{props.total_suply}</p>
            <p>num_owners:{props.num_owners}</p>
            <p>name:{props.name}</p>
            <p>data:{props.data}</p>
            <p>total_volume:{props.total_volume}</p>
            <p>seven_day_sales:{props.seven_day_sales}</p>
            
            <button className="btn">delete</button>
            </div>
    )
}
export default CollectionElement