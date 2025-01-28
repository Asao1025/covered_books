import PopContent from './popContent'

export default function PopContents() {
    return(
        <div className="popContents">
            <PopContent img={"./image/pops/arujyano-ni-hanatabawo.webp"}
                        paddingLeft={true}
                        bookName="アルジャーノンに花束を"/>
            <PopContent img={"./image/pops/ou-to-sa-kasu.webp"}
                        paddingLeft={false}
                        bookName="王とサーカス"/>
            <PopContent img={"./image/pops/ore-ore.webp"}
                        paddingLeft={true}
                        bookName="俺俺"/>
            <PopContent img={"./image/pops/mikkakan-no-kouhuku.webp"}
                        paddingLeft={false}
                        bookName="三日間の幸福"/>
        </div>
        )
 }

