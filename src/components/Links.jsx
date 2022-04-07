import "../App.css"

export const Links = ({arr})=>{
    return <div className="linkDiv">
    {arr.map((e)=><a href="" className="anchors">{e}</a>)}
    </div>
}