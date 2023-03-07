import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useBodyCb, useanouncementCb, usefooterCb, useFlex18Cb, usefooter_row_oneCb, useFlex11Cb, useFlex13Cb, useFlex14Cb, useFlex15Cb, useFlex16Cb, useFlex17Cb, useFlex20Cb, useFlex21Cb, useFlex22Cb, usefooter_row_threeCb, useFlex24Cb, usefooter_row_twoCb, usefr_col_oneCb, useFlex27Cb, usefr__col_twoCb, useFlex28Cb, usefr_col_threeCb, useFlex30Cb, usefr_col_fourCb, useFlex32Cb, usefr_col_fiveCb, useFlex34Cb, usesection_oneCb, useheaderCb, uselogoCb, usenavigationCb, useFlex40Cb, usehero_sectionCb, useopen_sourceCb, useFlex43Cb, useDiv3Cb, useFlex45Cb, useannouncement_contentCb, useImage11Cb, useImage16Cb, useImage17Cb, useImage18Cb, useImage20Cb, useImage21Cb, useImage22Cb, useTextBox5Cb, useImage23Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useTextBox16Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useTextBox20Cb, useTextBox18Cb, useTextBox19Cb, useTextBox23Cb, useTextBox21Cb, useTextBox25Cb, useTextBox24Cb, useImage24Cb, useImage25Cb, useImage26Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useTextBox30Cb, usesloganCb, usebenefitsCb, useTextBox31Cb, useImage27Cb, useTextBox32Cb, usecode_oneCb, usecode_twoCb, useImage31Cb, usecode_two_snippetCb, usecode_one_snippetCb, useDiv7Cb } from "../page-cbs/Home";
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
const anouncementProps = useStore((state)=>state["Home"]["anouncement"]);
const anouncementIoProps = useIoStore((state)=>state["Home"]["anouncement"]);
const anouncementCb = useanouncementCb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const footer_row_oneProps = useStore((state)=>state["Home"]["footer_row_one"]);
const footer_row_oneIoProps = useIoStore((state)=>state["Home"]["footer_row_one"]);
const footer_row_oneCb = usefooter_row_oneCb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const footer_row_threeProps = useStore((state)=>state["Home"]["footer_row_three"]);
const footer_row_threeIoProps = useIoStore((state)=>state["Home"]["footer_row_three"]);
const footer_row_threeCb = usefooter_row_threeCb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const footer_row_twoProps = useStore((state)=>state["Home"]["footer_row_two"]);
const footer_row_twoIoProps = useIoStore((state)=>state["Home"]["footer_row_two"]);
const footer_row_twoCb = usefooter_row_twoCb()
const fr_col_oneProps = useStore((state)=>state["Home"]["fr_col_one"]);
const fr_col_oneIoProps = useIoStore((state)=>state["Home"]["fr_col_one"]);
const fr_col_oneCb = usefr_col_oneCb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const fr__col_twoProps = useStore((state)=>state["Home"]["fr__col_two"]);
const fr__col_twoIoProps = useIoStore((state)=>state["Home"]["fr__col_two"]);
const fr__col_twoCb = usefr__col_twoCb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const fr_col_threeProps = useStore((state)=>state["Home"]["fr_col_three"]);
const fr_col_threeIoProps = useIoStore((state)=>state["Home"]["fr_col_three"]);
const fr_col_threeCb = usefr_col_threeCb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const fr_col_fourProps = useStore((state)=>state["Home"]["fr_col_four"]);
const fr_col_fourIoProps = useIoStore((state)=>state["Home"]["fr_col_four"]);
const fr_col_fourCb = usefr_col_fourCb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const fr_col_fiveProps = useStore((state)=>state["Home"]["fr_col_five"]);
const fr_col_fiveIoProps = useIoStore((state)=>state["Home"]["fr_col_five"]);
const fr_col_fiveCb = usefr_col_fiveCb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
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
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const hero_sectionProps = useStore((state)=>state["Home"]["hero_section"]);
const hero_sectionIoProps = useIoStore((state)=>state["Home"]["hero_section"]);
const hero_sectionCb = usehero_sectionCb()
const open_sourceProps = useStore((state)=>state["Home"]["open_source"]);
const open_sourceIoProps = useIoStore((state)=>state["Home"]["open_source"]);
const open_sourceCb = useopen_sourceCb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const announcement_contentProps = useStore((state)=>state["Home"]["announcement_content"]);
const announcement_contentIoProps = useIoStore((state)=>state["Home"]["announcement_content"]);
const announcement_contentCb = useannouncement_contentCb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
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
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const sloganProps = useStore((state)=>state["Home"]["slogan"]);
const sloganIoProps = useIoStore((state)=>state["Home"]["slogan"]);
const sloganCb = usesloganCb()
const benefitsProps = useStore((state)=>state["Home"]["benefits"]);
const benefitsIoProps = useIoStore((state)=>state["Home"]["benefits"]);
const benefitsCb = usebenefitsCb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const code_oneProps = useStore((state)=>state["Home"]["code_one"]);
const code_oneIoProps = useIoStore((state)=>state["Home"]["code_one"]);
const code_oneCb = usecode_oneCb()
const code_twoProps = useStore((state)=>state["Home"]["code_two"]);
const code_twoIoProps = useIoStore((state)=>state["Home"]["code_two"]);
const code_twoCb = usecode_twoCb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const code_two_snippetProps = useStore((state)=>state["Home"]["code_two_snippet"]);
const code_two_snippetIoProps = useIoStore((state)=>state["Home"]["code_two_snippet"]);
const code_two_snippetCb = usecode_two_snippetCb()
const code_one_snippetProps = useStore((state)=>state["Home"]["code_one_snippet"]);
const code_one_snippetIoProps = useIoStore((state)=>state["Home"]["code_one_snippet"]);
const code_one_snippetCb = usecode_one_snippetCb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()

  return (<>
  <Flex className="p-Home Body bpt" {...BodyProps} {...BodyCb} {...BodyIoProps}>
<Flex className="p-Home anouncement bpt" {...anouncementProps} {...anouncementCb} {...anouncementIoProps}>
<TextBox className="p-Home announcement_content bpt" {...announcement_contentProps} {...announcement_contentCb} {...announcement_contentIoProps}/>
</Flex>
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
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
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
<TextBox className="p-Home slogan bpt" {...sloganProps} {...sloganCb} {...sloganIoProps}/>
<TextBox className="p-Home benefits bpt" {...benefitsProps} {...benefitsCb} {...benefitsIoProps}/>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Image className="p-Home code_one_snippet bpt" {...code_one_snippetProps} {...code_one_snippetCb} {...code_one_snippetIoProps}/>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}/>
<Image className="p-Home code_two_snippet bpt" {...code_two_snippetProps} {...code_two_snippetCb} {...code_two_snippetIoProps}/>
</Flex>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Image className="p-Home code_two bpt" {...code_twoProps} {...code_twoCb} {...code_twoIoProps}/>
<Image className="p-Home code_one bpt" {...code_oneProps} {...code_oneCb} {...code_oneIoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex className="p-Home footer_row_one bpt" {...footer_row_oneProps} {...footer_row_oneCb} {...footer_row_oneIoProps}>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home footer_row_two bpt" {...footer_row_twoProps} {...footer_row_twoCb} {...footer_row_twoIoProps}>
<Flex className="p-Home fr_col_one bpt" {...fr_col_oneProps} {...fr_col_oneCb} {...fr_col_oneIoProps}>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home fr__col_two bpt" {...fr__col_twoProps} {...fr__col_twoCb} {...fr__col_twoIoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home fr_col_three bpt" {...fr_col_threeProps} {...fr_col_threeCb} {...fr_col_threeIoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home fr_col_four bpt" {...fr_col_fourProps} {...fr_col_fourCb} {...fr_col_fourIoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home fr_col_five bpt" {...fr_col_fiveProps} {...fr_col_fiveCb} {...fr_col_fiveIoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home footer_row_three bpt" {...footer_row_threeProps} {...footer_row_threeCb} {...footer_row_threeIoProps}>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
