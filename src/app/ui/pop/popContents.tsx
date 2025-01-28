import PopContent from './popContent'

export default function PopContents() {
    return(
        <div className="popContents">
            <PopContent img={"./image/pops/arujyano-ni-hanatabawo.webp"}
                        paddingLeft={true}/>
            <PopContent img={"./image/pops/ou-to-sa-kasu.webp"}
                        paddingLeft={false}/>
            <PopContent img={"./image/pops/ore-ore.webp"}
                                    paddingLeft={true}/>
            <PopContent img={"./image/pops/mikkakan-no-kouhuku.webp"}
                        paddingLeft={false}/>
        </div>
        )
 }

