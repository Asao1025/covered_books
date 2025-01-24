import PopContent from './popContent'

export default function PopContents() {
    return(
        <div className="popContents">
            <PopContent img={"./image/pops/arujyano-ni-hanatabawo.jpg"}
                        paddingLeft={true}
                        link={"../subPage"}/>
            <PopContent img={"./image/pops/ou-to-sa-kasu.jpg"}
                        paddingLeft={false}
                        link={"../subPage"}/>
            <PopContent img={"./image/pops/ore-ore.jpg"}
                                    paddingLeft={true}
                                    link={"../subPage"}/>
            <PopContent img={"./image/pops/mikkakan-no-kouhuku.jpg"}
                        paddingLeft={false}
                        link={"../subPage"}/>
        </div>
        )
 }

