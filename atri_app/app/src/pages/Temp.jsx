import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex72Cb, useFlex71Cb, useFlex68Cb, useFlex60Cb, useFlex48Cb, useFlex75Cb, useFlex61Cb, useFlex49Cb, useFlex62Cb, useFlex50Cb, useFlex63Cb, useFlex51Cb, useFlex64Cb, useFlex52Cb, useFlex69Cb, useFlex65Cb, useFlex70Cb, useFlex66Cb, useFlex54Cb, useFlex76Cb, useFlex67Cb, useFlex55Cb, useFlex56Cb, useFlex57Cb, useFlex58Cb, useFlex59Cb, useTextBox45Cb, useInput2Cb, useImage34Cb, useTextBox46Cb, useTextBox35Cb, useTextBox47Cb, useTextBox36Cb, useTextBox37Cb, useTextBox48Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useTextBox49Cb, useTextBox41Cb, useTextBox42Cb, useTextBox43Cb, useTextBox52Cb, useTextBox50Cb, useTextBox51Cb, useImage36Cb, useImage37Cb, useTextBox57Cb, useImage43Cb, useImage38Cb, useImage39Cb, useImage40Cb, useImage41Cb, useImage42Cb } from "../page-cbs/temp";
import "../page-css/temp.css";
import "../custom/temp";

export default function Temp() {
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

  const Flex72Props = useStore((state)=>state["temp"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["temp"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex71Props = useStore((state)=>state["temp"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["temp"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex68Props = useStore((state)=>state["temp"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["temp"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex60Props = useStore((state)=>state["temp"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["temp"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex48Props = useStore((state)=>state["temp"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["temp"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex75Props = useStore((state)=>state["temp"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["temp"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex61Props = useStore((state)=>state["temp"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["temp"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex49Props = useStore((state)=>state["temp"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["temp"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex62Props = useStore((state)=>state["temp"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["temp"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex50Props = useStore((state)=>state["temp"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["temp"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex63Props = useStore((state)=>state["temp"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["temp"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex51Props = useStore((state)=>state["temp"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["temp"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex64Props = useStore((state)=>state["temp"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["temp"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex52Props = useStore((state)=>state["temp"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["temp"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex69Props = useStore((state)=>state["temp"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["temp"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex65Props = useStore((state)=>state["temp"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["temp"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex70Props = useStore((state)=>state["temp"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["temp"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex66Props = useStore((state)=>state["temp"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["temp"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex54Props = useStore((state)=>state["temp"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["temp"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex76Props = useStore((state)=>state["temp"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["temp"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex67Props = useStore((state)=>state["temp"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["temp"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex55Props = useStore((state)=>state["temp"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["temp"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["temp"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["temp"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["temp"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["temp"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["temp"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["temp"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["temp"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["temp"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const TextBox45Props = useStore((state)=>state["temp"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["temp"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Input2Props = useStore((state)=>state["temp"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["temp"]["Input2"]);
const Input2Cb = useInput2Cb()
const Image34Props = useStore((state)=>state["temp"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["temp"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox46Props = useStore((state)=>state["temp"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["temp"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox35Props = useStore((state)=>state["temp"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["temp"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox47Props = useStore((state)=>state["temp"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["temp"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox36Props = useStore((state)=>state["temp"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["temp"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["temp"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["temp"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox48Props = useStore((state)=>state["temp"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["temp"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox38Props = useStore((state)=>state["temp"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["temp"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["temp"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["temp"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["temp"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["temp"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox49Props = useStore((state)=>state["temp"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["temp"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox41Props = useStore((state)=>state["temp"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["temp"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["temp"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["temp"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["temp"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["temp"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox52Props = useStore((state)=>state["temp"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["temp"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox50Props = useStore((state)=>state["temp"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["temp"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["temp"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["temp"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image36Props = useStore((state)=>state["temp"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["temp"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image37Props = useStore((state)=>state["temp"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["temp"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox57Props = useStore((state)=>state["temp"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["temp"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image43Props = useStore((state)=>state["temp"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["temp"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image38Props = useStore((state)=>state["temp"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["temp"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["temp"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["temp"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["temp"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["temp"]["Image40"]);
const Image40Cb = useImage40Cb()
const Image41Props = useStore((state)=>state["temp"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["temp"]["Image41"]);
const Image41Cb = useImage41Cb()
const Image42Props = useStore((state)=>state["temp"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["temp"]["Image42"]);
const Image42Cb = useImage42Cb()

  return (<>
  <Flex1 className="p-temp Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex1 className="p-temp Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex1 className="p-temp Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex1 className="p-temp Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Flex1 className="p-temp Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Image1 className="p-temp Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Image1 className="p-temp Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex1>
<Flex1 className="p-temp Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image1 className="p-temp Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox1 className="p-temp TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex1 className="p-temp Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Image1 className="p-temp Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex1>
<Flex1 className="p-temp Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Image1 className="p-temp Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex1>
<Flex1 className="p-temp Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Image1 className="p-temp Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex1>
<Flex1 className="p-temp Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image1 className="p-temp Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex1>
<Flex1 className="p-temp Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image1 className="p-temp Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Flex1 className="p-temp Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Flex1 className="p-temp Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox1 className="p-temp TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<Flex1 className="p-temp Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox1 className="p-temp TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox1 className="p-temp TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox1 className="p-temp TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox1 className="p-temp TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Flex1 className="p-temp Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox1 className="p-temp TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox1 className="p-temp TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox1 className="p-temp TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox1 className="p-temp TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<Flex1 className="p-temp Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox1 className="p-temp TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox1 className="p-temp TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox1 className="p-temp TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Flex1 className="p-temp Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox1 className="p-temp TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox1 className="p-temp TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<Flex1 className="p-temp Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Input1 className="p-temp Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
<Image1 className="p-temp Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-temp Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox1 className="p-temp TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Flex1 className="p-temp Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox1 className="p-temp TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox1 className="p-temp TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
