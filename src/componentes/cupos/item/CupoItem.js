export default function CupoItem({item}){
    return (
        <a href="#" className="truncate hoverable black-text">{item.producto} - {item.comprador} - {item.vendedor}</a>
    );

}