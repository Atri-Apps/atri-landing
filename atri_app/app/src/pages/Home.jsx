import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useBodyCb, usesection_oneCb, useheaderCb, uselogoCb, usenavigationCb, useFlex47Cb, useMenu1Cb, useFlex74Cb, usetop_menuCb, usehero_sectionCb, useopen_sourceCb, useFlex43Cb, useFlex45Cb, useslogan_containerCb, useDiv3Cb, usesubtitle_containerCb, useFlex224Cb, usesubtitle_container_mobCb, useFlex228Cb, useFlex102Cb, useFlex101Cb, useFlex98Cb, useFlex93Cb, useFlex81Cb, useFlex82Cb, useFlex83Cb, useFlex84Cb, useFlex85Cb, useFlex94Cb, useFlex87Cb, useFlex229Cb, useFlex99Cb, useFlex95Cb, useFlex100Cb, useFlex96Cb, useFlex88Cb, useFlex77Cb, useFlex89Cb, useFlex78Cb, useFlex90Cb, useFlex79Cb, useFlex91Cb, useFlex80Cb, useFlex97Cb, useFlex92Cb, usesign_up_statusCb, usesection_twoCb, useDiv6Cb, useFlex256Cb, useFlex255Cb, useFlex254Cb, useFlex259Cb, useFlex258Cb, useFlex257Cb, useFlex262Cb, useFlex261Cb, useFlex260Cb, usemade_with_atriCb, useImage25Cb, useImage26Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useButton1Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useTextBox31Cb, useImage27Cb, useTextBox32Cb, useImage31Cb, usecode_two_snippetCb, usecode_one_snippetCb, usesloganCb, useTextBox169Cb, usecode_oneCb, usecode_twoCb, usebenefitsCb, useTextBox170Cb, useTextBox171Cb, useImage106Cb, useTextBox172Cb, useTextBox173Cb, useImage109Cb, useImage44Cb, useImage45Cb, useImage46Cb, useImage47Cb, useImage48Cb, useImage50Cb, useImage51Cb, useTextBox175Cb, useImage110Cb, useTextBox75Cb, useTextBox72Cb, useTextBox73Cb, useTextBox68Cb, useTextBox59Cb, useTextBox60Cb, useTextBox69Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useTextBox70Cb, useTextBox64Cb, useTextBox65Cb, useTextBox71Cb, useTextBox66Cb, useTextBox74Cb, usesign_up_buttonCb, useInput3Cb, usesign_up_status_textCb, useTextBox176Cb, useTextBox177Cb, useImage119Cb, useTextBox221Cb, useTextBox222Cb, useTextBox218Cb, useTextBox219Cb, useTextBox220Cb, useImage120Cb, useTextBox226Cb, useTextBox227Cb, useTextBox223Cb, useTextBox224Cb, useTextBox225Cb, useImage121Cb, useTextBox231Cb, useTextBox232Cb, useTextBox228Cb, useTextBox229Cb, useTextBox230Cb, useImage107Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const BodyProps = useStore((state)=>state["Home"]["Body"]);
const BodyIoProps = useIoStore((state)=>state["Home"]["Body"]);
const BodyCb = useBodyCb()
const section_oneProps = useStore((state)=>state["Home"]["section_one"]);
const section_oneIoProps = useIoStore((state)=>state["Home"]["section_one"]);
const section_oneCb = usesection_oneCb()
const headerProps = useStore((state)=>state["Home"]["header"]);
const headerIoProps = useIoStore((state)=>state["Home"]["header"]);
const headerCb = useheaderCb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const navigationProps = useStore((state)=>state["Home"]["navigation"]);
const navigationIoProps = useIoStore((state)=>state["Home"]["navigation"]);
const navigationCb = usenavigationCb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const top_menuProps = useStore((state)=>state["Home"]["top_menu"]);
const top_menuIoProps = useIoStore((state)=>state["Home"]["top_menu"]);
const top_menuCb = usetop_menuCb()
const hero_sectionProps = useStore((state)=>state["Home"]["hero_section"]);
const hero_sectionIoProps = useIoStore((state)=>state["Home"]["hero_section"]);
const hero_sectionCb = usehero_sectionCb()
const open_sourceProps = useStore((state)=>state["Home"]["open_source"]);
const open_sourceIoProps = useIoStore((state)=>state["Home"]["open_source"]);
const open_sourceCb = useopen_sourceCb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const slogan_containerProps = useStore((state)=>state["Home"]["slogan_container"]);
const slogan_containerIoProps = useIoStore((state)=>state["Home"]["slogan_container"]);
const slogan_containerCb = useslogan_containerCb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const subtitle_containerProps = useStore((state)=>state["Home"]["subtitle_container"]);
const subtitle_containerIoProps = useIoStore((state)=>state["Home"]["subtitle_container"]);
const subtitle_containerCb = usesubtitle_containerCb()
const Flex224Props = useStore((state)=>state["Home"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Home"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const subtitle_container_mobProps = useStore((state)=>state["Home"]["subtitle_container_mob"]);
const subtitle_container_mobIoProps = useIoStore((state)=>state["Home"]["subtitle_container_mob"]);
const subtitle_container_mobCb = usesubtitle_container_mobCb()
const Flex228Props = useStore((state)=>state["Home"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["Home"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex229Props = useStore((state)=>state["Home"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["Home"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const sign_up_statusProps = useStore((state)=>state["Home"]["sign_up_status"]);
const sign_up_statusIoProps = useIoStore((state)=>state["Home"]["sign_up_status"]);
const sign_up_statusCb = usesign_up_statusCb()
const section_twoProps = useStore((state)=>state["Home"]["section_two"]);
const section_twoIoProps = useIoStore((state)=>state["Home"]["section_two"]);
const section_twoCb = usesection_twoCb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex256Props = useStore((state)=>state["Home"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["Home"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex255Props = useStore((state)=>state["Home"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Home"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex254Props = useStore((state)=>state["Home"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Home"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex257Props = useStore((state)=>state["Home"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["Home"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex262Props = useStore((state)=>state["Home"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Home"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex261Props = useStore((state)=>state["Home"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["Home"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex260Props = useStore((state)=>state["Home"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Home"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const made_with_atriProps = useStore((state)=>state["Home"]["made_with_atri"]);
const made_with_atriIoProps = useIoStore((state)=>state["Home"]["made_with_atri"]);
const made_with_atriCb = usemade_with_atriCb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const code_two_snippetProps = useStore((state)=>state["Home"]["code_two_snippet"]);
const code_two_snippetIoProps = useIoStore((state)=>state["Home"]["code_two_snippet"]);
const code_two_snippetCb = usecode_two_snippetCb()
const code_one_snippetProps = useStore((state)=>state["Home"]["code_one_snippet"]);
const code_one_snippetIoProps = useIoStore((state)=>state["Home"]["code_one_snippet"]);
const code_one_snippetCb = usecode_one_snippetCb()
const sloganProps = useStore((state)=>state["Home"]["slogan"]);
const sloganIoProps = useIoStore((state)=>state["Home"]["slogan"]);
const sloganCb = usesloganCb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const code_oneProps = useStore((state)=>state["Home"]["code_one"]);
const code_oneIoProps = useIoStore((state)=>state["Home"]["code_one"]);
const code_oneCb = usecode_oneCb()
const code_twoProps = useStore((state)=>state["Home"]["code_two"]);
const code_twoIoProps = useIoStore((state)=>state["Home"]["code_two"]);
const code_twoCb = usecode_twoCb()
const benefitsProps = useStore((state)=>state["Home"]["benefits"]);
const benefitsIoProps = useIoStore((state)=>state["Home"]["benefits"]);
const benefitsCb = usebenefitsCb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image106Props = useStore((state)=>state["Home"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Home"]["Image106"]);
const Image106Cb = useImage106Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Image109Props = useStore((state)=>state["Home"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Home"]["Image109"]);
const Image109Cb = useImage109Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image110Props = useStore((state)=>state["Home"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Home"]["Image110"]);
const Image110Cb = useImage110Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const sign_up_buttonProps = useStore((state)=>state["Home"]["sign_up_button"]);
const sign_up_buttonIoProps = useIoStore((state)=>state["Home"]["sign_up_button"]);
const sign_up_buttonCb = usesign_up_buttonCb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const sign_up_status_textProps = useStore((state)=>state["Home"]["sign_up_status_text"]);
const sign_up_status_textIoProps = useIoStore((state)=>state["Home"]["sign_up_status_text"]);
const sign_up_status_textCb = usesign_up_status_textCb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Image119Props = useStore((state)=>state["Home"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Home"]["Image119"]);
const Image119Cb = useImage119Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Image120Props = useStore((state)=>state["Home"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Home"]["Image120"]);
const Image120Cb = useImage120Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const Image121Props = useStore((state)=>state["Home"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Home"]["Image121"]);
const Image121Cb = useImage121Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()

  return (<>
  <Flex className="p-Home made_with_atri bpt" {...made_with_atriProps} {...made_with_atriCb} {...made_with_atriIoProps}>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Flex>
<Flex className="p-Home Body bpt" {...BodyProps} {...BodyCb} {...BodyIoProps}>
<Flex className="p-Home section_one bpt" {...section_oneProps} {...section_oneCb} {...section_oneIoProps}>
<Flex className="p-Home header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
<Flex className="p-Home navigation bpt" {...navigationProps} {...navigationCb} {...navigationIoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Menu className="p-Home Menu1 bpt" {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex className="p-Home top_menu bpt" {...top_menuProps} {...top_menuCb} {...top_menuIoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
</Flex>
</Menu>
</Flex>
</Flex>
<Flex className="p-Home hero_section bpt" {...hero_sectionProps} {...hero_sectionCb} {...hero_sectionIoProps}>
<Flex className="p-Home open_source bpt" {...open_sourceProps} {...open_sourceCb} {...open_sourceIoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home slogan_container bpt" {...slogan_containerProps} {...slogan_containerCb} {...slogan_containerIoProps}>
<TextBox className="p-Home slogan bpt" {...sloganProps} {...sloganCb} {...sloganIoProps}/>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex>
<Flex className="p-Home subtitle_container bpt" {...subtitle_containerProps} {...subtitle_containerCb} {...subtitle_containerIoProps}>
<TextBox className="p-Home benefits bpt" {...benefitsProps} {...benefitsCb} {...benefitsIoProps}/>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home subtitle_container_mob bpt" {...subtitle_container_mobProps} {...subtitle_container_mobCb} {...subtitle_container_mobIoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Image className="p-Home code_one_snippet bpt" {...code_one_snippetProps} {...code_one_snippetCb} {...code_one_snippetIoProps}/>
<Image className="p-Home code_two_snippet bpt" {...code_two_snippetProps} {...code_two_snippetCb} {...code_two_snippetIoProps}/>
</Flex>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Image className="p-Home code_two bpt" {...code_twoProps} {...code_twoCb} {...code_twoIoProps}/>
<Image className="p-Home code_one bpt" {...code_oneProps} {...code_oneCb} {...code_oneIoProps}/>
</Div>
<Flex className="p-Home Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Image className="p-Home Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex>
<Flex className="p-Home Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<Image className="p-Home Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home section_two bpt" {...section_twoProps} {...section_twoCb} {...section_twoIoProps}>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Flex className="p-Home Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Flex className="p-Home Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<TextBox className="p-Home TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<Flex className="p-Home Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex>
<Flex className="p-Home Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<Flex className="p-Home Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
</Flex>
<Flex className="p-Home Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex className="p-Home Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<Flex className="p-Home Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex>
<Flex className="p-Home Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image className="p-Home Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Flex>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Flex>
<Flex className="p-Home Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
<Image className="p-Home sign_up_button bpt" {...sign_up_buttonProps} {...sign_up_buttonCb} {...sign_up_buttonIoProps}/>
</Flex>
<Flex className="p-Home sign_up_status bpt" {...sign_up_statusProps} {...sign_up_statusCb} {...sign_up_statusIoProps}>
<TextBox className="p-Home sign_up_status_text bpt" {...sign_up_status_textProps} {...sign_up_status_textCb} {...sign_up_status_textIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
