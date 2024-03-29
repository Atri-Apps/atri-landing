import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex151Cb, useFlex150Cb, useFlex147Cb, useFlex141Cb, useDiv5Cb, usegallery_containerCb, usegallery_row_1Cb, usegallery_row_2Cb, useFlex155Cb, useheaderCb, useFlex218Cb, useMenu5Cb, useFlex217Cb, useFlex216Cb, useFlex219Cb, useFlex220Cb, useFlex181Cb, useFlex180Cb, useFlex177Cb, useFlex172Cb, useFlex160Cb, usesign_up_statusCb, useFlex173Cb, useFlex161Cb, useFlex156Cb, useFlex162Cb, useFlex157Cb, useFlex163Cb, useFlex158Cb, useFlex164Cb, useFlex159Cb, useFlex178Cb, useFlex174Cb, useFlex179Cb, useFlex175Cb, useFlex165Cb, useFlex166Cb, useFlex176Cb, useFlex167Cb, useFlex168Cb, useFlex169Cb, useFlex170Cb, useFlex171Cb, usemade_with_atriCb, usesub_sloganCb, usesloganCb, useImage71Cb, useImage72Cb, useImage74Cb, useImage75Cb, useImage78Cb, useImage82Cb, useImage79Cb, useImage81Cb, useImage80Cb, useImage83Cb, useButton5Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useTextBox164Cb, useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useTextBox168Cb, useImage104Cb, useImage105Cb, useTextBox130Cb, useInput5Cb, usesign_up_buttonCb, usesign_up_status_textCb, useTextBox125Cb, useTextBox117Cb, useTextBox126Cb, useTextBox118Cb, useTextBox119Cb, useTextBox127Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useTextBox128Cb, useTextBox123Cb, useTextBox124Cb, useTextBox133Cb, useTextBox131Cb, useTextBox132Cb, useImage85Cb, useImage86Cb, useTextBox129Cb, useImage87Cb, useImage88Cb, useImage89Cb, useImage90Cb, useImage91Cb, useImage92Cb, useImage108Cb } from "../page-cbs/showcase";
import "../page-css/showcase.css";
import "../custom/showcase";

export default function Showcase() {
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

  const Flex151Props = useStore((state)=>state["showcase"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["showcase"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex150Props = useStore((state)=>state["showcase"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["showcase"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex147Props = useStore((state)=>state["showcase"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["showcase"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex141Props = useStore((state)=>state["showcase"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["showcase"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Div5Props = useStore((state)=>state["showcase"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["showcase"]["Div5"]);
const Div5Cb = useDiv5Cb()
const gallery_containerProps = useStore((state)=>state["showcase"]["gallery_container"]);
const gallery_containerIoProps = useIoStore((state)=>state["showcase"]["gallery_container"]);
const gallery_containerCb = usegallery_containerCb()
const gallery_row_1Props = useStore((state)=>state["showcase"]["gallery_row_1"]);
const gallery_row_1IoProps = useIoStore((state)=>state["showcase"]["gallery_row_1"]);
const gallery_row_1Cb = usegallery_row_1Cb()
const gallery_row_2Props = useStore((state)=>state["showcase"]["gallery_row_2"]);
const gallery_row_2IoProps = useIoStore((state)=>state["showcase"]["gallery_row_2"]);
const gallery_row_2Cb = usegallery_row_2Cb()
const Flex155Props = useStore((state)=>state["showcase"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["showcase"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const headerProps = useStore((state)=>state["showcase"]["header"]);
const headerIoProps = useIoStore((state)=>state["showcase"]["header"]);
const headerCb = useheaderCb()
const Flex218Props = useStore((state)=>state["showcase"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["showcase"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const Menu5Props = useStore((state)=>state["showcase"]["Menu5"]);
const Menu5IoProps = useIoStore((state)=>state["showcase"]["Menu5"]);
const Menu5Cb = useMenu5Cb()
const Flex217Props = useStore((state)=>state["showcase"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["showcase"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex216Props = useStore((state)=>state["showcase"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["showcase"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Flex219Props = useStore((state)=>state["showcase"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["showcase"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex220Props = useStore((state)=>state["showcase"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["showcase"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex181Props = useStore((state)=>state["showcase"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["showcase"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex180Props = useStore((state)=>state["showcase"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["showcase"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex177Props = useStore((state)=>state["showcase"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["showcase"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Flex172Props = useStore((state)=>state["showcase"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["showcase"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex160Props = useStore((state)=>state["showcase"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["showcase"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const sign_up_statusProps = useStore((state)=>state["showcase"]["sign_up_status"]);
const sign_up_statusIoProps = useIoStore((state)=>state["showcase"]["sign_up_status"]);
const sign_up_statusCb = usesign_up_statusCb()
const Flex173Props = useStore((state)=>state["showcase"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["showcase"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex161Props = useStore((state)=>state["showcase"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["showcase"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex156Props = useStore((state)=>state["showcase"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["showcase"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex162Props = useStore((state)=>state["showcase"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["showcase"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex157Props = useStore((state)=>state["showcase"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["showcase"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex163Props = useStore((state)=>state["showcase"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["showcase"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex158Props = useStore((state)=>state["showcase"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["showcase"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex164Props = useStore((state)=>state["showcase"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["showcase"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex159Props = useStore((state)=>state["showcase"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["showcase"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex178Props = useStore((state)=>state["showcase"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["showcase"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex174Props = useStore((state)=>state["showcase"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["showcase"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex179Props = useStore((state)=>state["showcase"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["showcase"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex175Props = useStore((state)=>state["showcase"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["showcase"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex165Props = useStore((state)=>state["showcase"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["showcase"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["showcase"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["showcase"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex176Props = useStore((state)=>state["showcase"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["showcase"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Flex167Props = useStore((state)=>state["showcase"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["showcase"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex168Props = useStore((state)=>state["showcase"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["showcase"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex169Props = useStore((state)=>state["showcase"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["showcase"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["showcase"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["showcase"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex171Props = useStore((state)=>state["showcase"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["showcase"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const made_with_atriProps = useStore((state)=>state["showcase"]["made_with_atri"]);
const made_with_atriIoProps = useIoStore((state)=>state["showcase"]["made_with_atri"]);
const made_with_atriCb = usemade_with_atriCb()
const sub_sloganProps = useStore((state)=>state["showcase"]["sub_slogan"]);
const sub_sloganIoProps = useIoStore((state)=>state["showcase"]["sub_slogan"]);
const sub_sloganCb = usesub_sloganCb()
const sloganProps = useStore((state)=>state["showcase"]["slogan"]);
const sloganIoProps = useIoStore((state)=>state["showcase"]["slogan"]);
const sloganCb = usesloganCb()
const Image71Props = useStore((state)=>state["showcase"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["showcase"]["Image71"]);
const Image71Cb = useImage71Cb()
const Image72Props = useStore((state)=>state["showcase"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["showcase"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image74Props = useStore((state)=>state["showcase"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["showcase"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image75Props = useStore((state)=>state["showcase"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["showcase"]["Image75"]);
const Image75Cb = useImage75Cb()
const Image78Props = useStore((state)=>state["showcase"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["showcase"]["Image78"]);
const Image78Cb = useImage78Cb()
const Image82Props = useStore((state)=>state["showcase"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["showcase"]["Image82"]);
const Image82Cb = useImage82Cb()
const Image79Props = useStore((state)=>state["showcase"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["showcase"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image81Props = useStore((state)=>state["showcase"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["showcase"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image80Props = useStore((state)=>state["showcase"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["showcase"]["Image80"]);
const Image80Cb = useImage80Cb()
const Image83Props = useStore((state)=>state["showcase"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["showcase"]["Image83"]);
const Image83Cb = useImage83Cb()
const Button5Props = useStore((state)=>state["showcase"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["showcase"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox161Props = useStore((state)=>state["showcase"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["showcase"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["showcase"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["showcase"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["showcase"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["showcase"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["showcase"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["showcase"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["showcase"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["showcase"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["showcase"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["showcase"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["showcase"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["showcase"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["showcase"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["showcase"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Image104Props = useStore((state)=>state["showcase"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["showcase"]["Image104"]);
const Image104Cb = useImage104Cb()
const Image105Props = useStore((state)=>state["showcase"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["showcase"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox130Props = useStore((state)=>state["showcase"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["showcase"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Input5Props = useStore((state)=>state["showcase"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["showcase"]["Input5"]);
const Input5Cb = useInput5Cb()
const sign_up_buttonProps = useStore((state)=>state["showcase"]["sign_up_button"]);
const sign_up_buttonIoProps = useIoStore((state)=>state["showcase"]["sign_up_button"]);
const sign_up_buttonCb = usesign_up_buttonCb()
const sign_up_status_textProps = useStore((state)=>state["showcase"]["sign_up_status_text"]);
const sign_up_status_textIoProps = useIoStore((state)=>state["showcase"]["sign_up_status_text"]);
const sign_up_status_textCb = usesign_up_status_textCb()
const TextBox125Props = useStore((state)=>state["showcase"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["showcase"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox117Props = useStore((state)=>state["showcase"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["showcase"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox126Props = useStore((state)=>state["showcase"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["showcase"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox118Props = useStore((state)=>state["showcase"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["showcase"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["showcase"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["showcase"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox127Props = useStore((state)=>state["showcase"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["showcase"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox120Props = useStore((state)=>state["showcase"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["showcase"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["showcase"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["showcase"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["showcase"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["showcase"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox128Props = useStore((state)=>state["showcase"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["showcase"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox123Props = useStore((state)=>state["showcase"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["showcase"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["showcase"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["showcase"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox133Props = useStore((state)=>state["showcase"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["showcase"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox131Props = useStore((state)=>state["showcase"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["showcase"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["showcase"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["showcase"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image85Props = useStore((state)=>state["showcase"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["showcase"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image86Props = useStore((state)=>state["showcase"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["showcase"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox129Props = useStore((state)=>state["showcase"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["showcase"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const Image87Props = useStore((state)=>state["showcase"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["showcase"]["Image87"]);
const Image87Cb = useImage87Cb()
const Image88Props = useStore((state)=>state["showcase"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["showcase"]["Image88"]);
const Image88Cb = useImage88Cb()
const Image89Props = useStore((state)=>state["showcase"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["showcase"]["Image89"]);
const Image89Cb = useImage89Cb()
const Image90Props = useStore((state)=>state["showcase"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["showcase"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["showcase"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["showcase"]["Image91"]);
const Image91Cb = useImage91Cb()
const Image92Props = useStore((state)=>state["showcase"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["showcase"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image108Props = useStore((state)=>state["showcase"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["showcase"]["Image108"]);
const Image108Cb = useImage108Cb()

  return (<>
  <Flex2 className="p-showcase Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Flex2 className="p-showcase Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Flex2 className="p-showcase header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex2 className="p-showcase Flex220 bpt" {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Image2 className="p-showcase Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<Image2 className="p-showcase Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<TextBox2 className="p-showcase TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox2 className="p-showcase TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox2 className="p-showcase TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox2 className="p-showcase TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex218 bpt" {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<Button1 className="p-showcase Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Menu1 className="p-showcase Menu5 bpt" {...Menu5Props} {...Menu5Cb} {...Menu5IoProps}>
<Flex2 className="p-showcase Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<Flex2 className="p-showcase Flex216 bpt" {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<TextBox2 className="p-showcase TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<TextBox2 className="p-showcase TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<TextBox2 className="p-showcase TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox2 className="p-showcase TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex2>
</Flex2>
</Menu1>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<TextBox2 className="p-showcase slogan bpt" {...sloganProps} {...sloganCb} {...sloganIoProps}/>
<TextBox2 className="p-showcase sub_slogan bpt" {...sub_sloganProps} {...sub_sloganCb} {...sub_sloganIoProps}/>
<Flex2 className="p-showcase Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Image2 className="p-showcase Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<Image2 className="p-showcase Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
</Flex2>
<Div1 className="p-showcase Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Image2 className="p-showcase Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<Image2 className="p-showcase Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Div1>
<Flex2 className="p-showcase gallery_container bpt" {...gallery_containerProps} {...gallery_containerCb} {...gallery_containerIoProps}>
<Flex2 className="p-showcase gallery_row_1 bpt" {...gallery_row_1Props} {...gallery_row_1Cb} {...gallery_row_1IoProps}>
<Image2 className="p-showcase Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<Image2 className="p-showcase Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
</Flex2>
<Flex2 className="p-showcase gallery_row_2 bpt" {...gallery_row_2Props} {...gallery_row_2Cb} {...gallery_row_2IoProps}>
<Image2 className="p-showcase Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
<Image2 className="p-showcase Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Image2 className="p-showcase Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
<Image2 className="p-showcase Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<Flex2 className="p-showcase Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<Flex2 className="p-showcase Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<Flex2 className="p-showcase Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<Flex2 className="p-showcase Flex165 bpt" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<Image2 className="p-showcase Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<Image2 className="p-showcase Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<Image2 className="p-showcase Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<TextBox2 className="p-showcase TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<Flex2 className="p-showcase Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Image2 className="p-showcase Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Image2 className="p-showcase Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Image2 className="p-showcase Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image2 className="p-showcase Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Flex2>
<Flex2 className="p-showcase Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<Image2 className="p-showcase Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<Flex2 className="p-showcase Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<Flex2 className="p-showcase Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<TextBox2 className="p-showcase TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<Flex2 className="p-showcase Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox2 className="p-showcase TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox2 className="p-showcase TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<TextBox2 className="p-showcase TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<Flex2 className="p-showcase Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox2 className="p-showcase TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox2 className="p-showcase TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<TextBox2 className="p-showcase TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox2 className="p-showcase TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<Flex2 className="p-showcase Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<TextBox2 className="p-showcase TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox2 className="p-showcase TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox2 className="p-showcase TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<Flex2 className="p-showcase Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox2 className="p-showcase TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<TextBox2 className="p-showcase TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<Flex2 className="p-showcase Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Input2 className="p-showcase Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
<Image2 className="p-showcase sign_up_button bpt" {...sign_up_buttonProps} {...sign_up_buttonCb} {...sign_up_buttonIoProps}/>
</Flex2>
<Flex2 className="p-showcase sign_up_status bpt" {...sign_up_statusProps} {...sign_up_statusCb} {...sign_up_statusIoProps}>
<TextBox2 className="p-showcase sign_up_status_text bpt" {...sign_up_status_textProps} {...sign_up_status_textCb} {...sign_up_status_textIoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-showcase Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox2 className="p-showcase TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<Flex2 className="p-showcase Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<TextBox2 className="p-showcase TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox2 className="p-showcase TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-showcase made_with_atri bpt" {...made_with_atriProps} {...made_with_atriCb} {...made_with_atriIoProps}>
<Image2 className="p-showcase Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
</Flex2>
  </>);
}
