import PopContent from './popContent'

export default function PopContents() {
    return(
        <div className="popContents">
            <PopContent img={"./image/pops/arujyano-ni-hanatabawo.webp"}
                        paddingLeft={true}
                        bookName="アルジャーノンに花束を"
                        link="https://amzn.to/4gj5kbK"/>
            <PopContent img={"./image/pops/ou-to-sa-kasu.webp"}
                        paddingLeft={false}
                        bookName="王とサーカス"
                        link="https://amzn.to/4aDVWi3"/>
            <PopContent img={"./image/pops/ore-ore.webp"}
                        paddingLeft={true}
                        bookName="俺俺"
                        link="https://amzn.to/4aBL97L"/>
            <PopContent img={"./image/pops/mikkakan-no-kouhuku.webp"}
                        paddingLeft={false}
                        bookName="三日間の幸福"
                        link="https://amzn.to/3WBy6xi"/>
        </div>
        )
 }

