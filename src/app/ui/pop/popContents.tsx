import PopContent from './popContent'

export default function PopContents() {
    return(
        <div className="popContents">
            <PopContent img={"./image/pops/testPop1.jpg"}
                        paddingLeft={true}
                        link={"../subPage"}/>
            <PopContent img={"./image/pops/testPop1.jpg"}
                        paddingLeft={false}
                        link={"../subPage"}/>
        </div>
        )
 }

