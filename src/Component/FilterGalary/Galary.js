import { SRLWrapper } from "simple-react-lightbox"
export default function Galary(props) {
    console.log(props.state.images)
    return (
        <div className="mar-top">
       



        <p className="heading">Gallery</p>
            <div className="text-center " handleSetTag="{setTag}">
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="one" handleSetTag="{setTag}">Solar Heater</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="two" handleSetTag="{setTag}">Solarizer</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="three" handleSetTag="{setTag}">Rooftop</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="four" handleSetTag="{setTag}" >Solarizer spring</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary}  name="all" handleSetTag="{setTag}">All</button>
            </div>
                <SRLWrapper>

            <div className="gallery">
          {props.state.images?.map((image) => (
                          <a href={image.src}>

              <img className="pics"  src={image.src} alt="" />
              </a>
          ))}
        
            </div>
            </SRLWrapper>
         </div>
    )
}
