import svgPaths from "./svg-s5deiqyph3";
import clsx from "clsx";
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("[grid-area:1_/_1] mt-0 relative size-[17px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[20px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function FrameBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Drop Icons">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic px-[4px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <BackgroundImage1>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#121318] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">{text}</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_Myanmar:Regular',sans-serif] justify-center relative shrink-0 text-[#445861] text-[12px] tracking-[0.4px] w-full">
        <p className="leading-[16px]">{text1}</p>
      </div>
    </BackgroundImage1>
  );
}

function DropIconsBackgroundImage() {
  return (
    <BackgroundImage2>
      <mask height="24" id="mask0_3_4660" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
        <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
      </mask>
      <g mask="url(#mask0_3_4660)">
        <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1C1B1F)" id="arrow_drop_down" />
      </g>
    </BackgroundImage2>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#445861] text-[12px] tracking-[0.5px]">
      <ul>
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">{text}</span>
        </li>
      </ul>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.25px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">
          <path d={svgPaths.pd26770} fill="var(--fill-0, #E8EAED)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-[8px] pt-[4px] relative shrink-0" data-name="Margin">
      <Frame />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[32px]">Java Programming</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-nowrap text-white tracking-[0.5px]">
        <p className="leading-[16px]">Beginner</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <ContainerBackgroundImageAndText text="Basic Course" additionalClassNames="opacity-80" />
      <Margin1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.028px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[55.028px] items-start left-[16px] right-[16px] top-[16px]" data-name="Container">
      <Margin />
      <Container1 />
    </div>
  );
}

function Frame1() {
  return (
    <FrameBackgroundImage>
      <path d={svgPaths.p2425a5c0} fill="var(--fill-0, #E8EAED)" id="Vector" />
    </FrameBackgroundImage>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[6px] py-0 relative shrink-0" data-name="Margin">
      <Frame1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex grow h-[15.141px] items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Margin2 />
      <ContainerBackgroundImageAndText text="120 Hours" />
    </div>
  );
}

function Frame2() {
  return (
    <FrameBackgroundImage>
      <path d={svgPaths.p3d84c740} fill="var(--fill-0, #E8EAED)" id="Vector" />
    </FrameBackgroundImage>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[6px] py-0 relative shrink-0" data-name="Margin">
      <Frame2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex grow h-[15.141px] items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Margin3 />
      <ContainerBackgroundImageAndText text="25 Chapters" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Frame3() {
  return (
    <FrameBackgroundImage>
      <path d={svgPaths.p1770a080} fill="var(--fill-0, #E8EAED)" id="Vector" />
    </FrameBackgroundImage>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[6px] py-0 relative shrink-0" data-name="Margin">
      <Frame3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.4px]">
        <p className="leading-[16px]">Certificate</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[15.141px] items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Margin4 />
      <Container5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[45.5px] right-[16.5px] top-[78px]" data-name="Container">
      <Row />
      <Row1 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="h-[133.309px] overflow-clip relative rounded-[8px] shadow-[0px_7.57px_11.355px_-2.271px_rgba(0,0,0,0.1),0px_3.028px_4.542px_-3.028px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(160.186deg, rgb(59, 130, 246) 0%, rgb(79, 70, 229) 100%)" }}>
      <Container2 />
      <Container7 />
    </div>
  );
}

function Frame5() {
  return (
    <BackgroundImage1>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#25282e] text-[16px] tracking-[0.15px] w-full">
        <p className="leading-[24px]">What you’ll learn</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_Myanmar:Regular',sans-serif] justify-center relative shrink-0 text-[#445861] text-[14px] tracking-[0.4px] w-full">
        <p className="leading-[16px]">Programming နဲ့ ပတ်သက်ပြီး အခြေခံရှိသည်ဖြစ်စေ မရှိသည်ဖြစ်စေ လေ့လာနိုင်မှာဖြစ်ပြီး Basic တင် သင်ကြားပေးမှာမဟုတ်ဘဲ Exception Handling,Mysql, Java Database, Collections Framework, Serialization, Design Patterns အစရှိတဲ့ 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗟𝗲𝘃𝗲𝗹 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀 တွေအထိ စာတွေ့၊ လက်တွေ့သာမကဘဲ Projects တွေနဲ့ပါ စနစ်တကျ သင်ကြားပို့ချပေးသွားမှာဖြစ်ပါတယ်။</p>
      </div>
    </BackgroundImage1>
  );
}

function DropIcons() {
  return (
    <BackgroundImage2>
      <rect fill="white" height="24" width="24" />
      <mask height="24" id="mask0_3_4679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
        <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
      </mask>
      <g mask="url(#mask0_3_4679)">
        <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1C1B1F)" id="arrow_drop_down" />
      </g>
    </BackgroundImage2>
  );
}

function ModuleCaptionAndIconConatienr() {
  return (
    <BackgroundImage3>
      <BackgroundImageAndText text="Module 1" />
      <DropIcons />
    </BackgroundImage3>
  );
}

function Module1Conatiner() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Module 1 Conatiner">
      <ModuleCaptionAndIconConatienr />
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#445861] text-[12px] tracking-[0.4px] w-full">
        <ul>
          <ul className="list-disc">
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">{` Chapter 01  - The Basics`}</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">{`Chapter 02  - Control Statements`}</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">{`Chapter 03  - Arrays`}</span>
            </li>
            <li className="ms-[36px]">
              <span className="leading-[16px]">First Project</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

function ModuleCaptionAndIconContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Module Caption and Icon Container">
      <BackgroundImageAndText text="Module 2" />
      <DropIconsBackgroundImage />
    </div>
  );
}

function Module2Conatiner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Module 2 Conatiner">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start pl-0 pr-[20px] py-0 relative w-full">
          <ModuleCaptionAndIconContainer />
          <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#445861] text-[12px] tracking-[0.4px] w-full">
            <ul>
              <ul className="list-disc">
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">{`Chapter 04 - Object & Class`}</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 05 - Inheritance</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 06 - Polymorphism</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 07 - *****</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 08 - *****</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 09 - *****</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 10 - *****</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">Chapter 11 - *****</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[16px]">{`Chapter 12 - *****   `}</span>
                </li>
                <li className="ms-[36px]">
                  <span className="leading-[16px]">Second Project</span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCaption() {
  return (
    <BackgroundImage3>
      <BackgroundImageAndText text="Module 3" />
      <DropIconsBackgroundImage />
    </BackgroundImage3>
  );
}

function Module3Container() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Module 3 Container">
      <ModuleCaption />
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#445861] text-[12px] tracking-[0.4px] w-full">
        <ul>
          <ul className="list-disc">
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 13 - Inner Class</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 14 - Lambda Function</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 15 - List</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 16 - *****</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 17 - *****</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 18 - *****</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 19 - *****</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 20 - *****</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 21 - *****</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[16px]">Chapter 22 - *****</span>
            </li>
            <li className="ms-[36px]">
              <span className="leading-[16px]">Final Project</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[4px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[370px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121318] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Curriculum</p>
      </div>
      <Module1Conatiner />
      <Module2Conatiner />
      <Module3Container />
    </div>
  );
}

function Frame6() {
  return (
    <BackgroundImage1>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#25282e] text-[16px] tracking-[0.15px] w-full">
        <p className="leading-[24px]">Description</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_Myanmar:Regular',sans-serif] justify-center leading-[16px] relative shrink-0 text-[#445861] text-[14px] tracking-[0.4px] w-full">
        <p className="mb-0">Chapter တစ်ခုပြီးတိုင်း Project တွေပြုလုပ်သွားမှာမို့လို့ သင်တန်းပြီးဆုံးတဲ့အခါ Projects များစွာ ရေးထားပြီးသားဖြစ်သည့်အတွက် Programming ကို အခြေခံပိုင်နိုင်သွားမှာပါ။</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">ဒီအတန်းကိုအောင်မြင်စွာ ပြီးဆုံးသွားတဲ့အခါ</p>
        <p className="mb-0">{` Android Framework Development `}</p>
        <p className="mb-0">{` Flutter Framework Development `}</p>
        <p className="mb-0">{` Java Spring Framework Development `}</p>
        <p>စတဲ့ Courses များထဲမှ မိမိဝါသနာပါရာကို ဆက်လက် တက်ရောက်နိုင်ပါတယ်။</p>
      </div>
    </BackgroundImage1>
  );
}

function Frame7() {
  return (
    <BackgroundImage1>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#25282e] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Audience</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_Myanmar:Regular',sans-serif] justify-center leading-[16px] relative shrink-0 text-[#445861] text-[12px] tracking-[0.4px] w-full">
        <p className="mb-0">Android Framework Development, Cross platform Development(Flutter), Java Spring Framework Development စတာတွေ လုပ်ဖို့ ရည်ရွယ်ထားရင် Java Programming အတန်းကို မဖြစ်မနေ တက်ပေးရပါမယ်။</p>
        <p>{`Programming Language တစ်ခုခုကို စ try  ချင်တဲ့သူတွေ၊ IT နဲ့ပတ်သက်ပြီး လေ့လာနေတဲ့ သူတွေ၊ ပြည်ပမှာ ကျောင်းတက်နေသူတွေ၊Computer Science နဲ့ ပတ်သက်တဲ့ Major ယူထားသူ၊Software development နယ်ပယ်နဲ့ စတင်ထိတွေ့ချင်တဲ့ သူတွေ လည်း တက်ရောက်သင့်ပါတယ်။`}</p>
      </div>
    </BackgroundImage1>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center overflow-x-clip overflow-y-auto px-0 py-[12px] relative shrink-0 w-[370px]" data-name="Content">
      <BackgroundShadow />
      <Frame5 />
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <BackgroundImage text="Prerequisite" text1="Computer အခြေခံ တတ်မြောက်ထားဖို့ လိုအပ်ပါသည်။" />
      <BackgroundImage text="Requirements" text1="သင်ခန်းစာများကို လက်တွေ့ လိုက်ပါစမ်းသပ်ရန် အတွက် Laptop သို့မဟုတ် Computer တစ်လုံးရှိရန် မဖြစ်မနေ လိုအပ်ပါသည်။" />
    </div>
  );
}

function AutoLayout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1147px] items-center left-[-1px] overflow-x-clip overflow-y-auto top-[106px] w-[391px]" data-name="AutoLayout">
      <Content />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-gradient-to-r from-[#0079bd] h-[40px] relative rounded-[4px] shrink-0 to-[#53dde5] w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[80px] py-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]">{`Enroll this course `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-center left-0 px-[8px] py-[16px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[390px]">
      <Buttons />
    </div>
  );
}

function IcRoundArrowBack() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="ic:round-arrow-back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-arrow-back">
          <path d={svgPaths.p3574caf0} fill="var(--fill-0, #777D8E)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function AppBar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-0 overflow-clip px-[16px] py-[15px] shadow-[0px_4px_10px_0px_rgba(125,125,125,0.5)] top-[52px] w-[390px]" data-name="App Bar">
      <IcRoundArrowBack />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0079bd] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Details Course</p>
      </div>
    </div>
  );
}

function Wifi() {
  return (
    <BackgroundImage4 additionalClassNames="ml-0">
      <g id="Wifi">
        <g id="Path"></g>
        <g id="Rectangle"></g>
        <g id="Path_2"></g>
        <path d={svgPaths.p34567080} fill="var(--fill-0, #1D1B20)" id="Path_3" opacity="0.1" />
      </g>
    </BackgroundImage4>
  );
}

function Signal() {
  return (
    <BackgroundImage4 additionalClassNames="ml-[34.78%]">
      <g id="Signal">
        <g id="Path"></g>
        <path d={svgPaths.p112c6500} fill="var(--fill-0, #1D1B20)" id="Path_2" />
      </g>
    </BackgroundImage4>
  );
}

function Battery() {
  return (
    <div className="[grid-area:1_/_1] h-[15px] ml-[38px] mt-px relative w-[8px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
        <g id="Battery">
          <path d={svgPaths.p2dfd100} fill="var(--fill-0, #1F1F1F)" fillOpacity="0.3" id="Base" />
          <path d={svgPaths.p2657cc00} fill="var(--fill-0, #1D1B20)" id="Charge" />
        </g>
      </svg>
    </div>
  );
}

function RightIcons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="right icons">
      <Wifi />
      <Signal />
      <Battery />
    </div>
  );
}

function DeviceDeviceFrameComponentsStatusBar() {
  return (
    <div className="content-stretch flex h-[52px] items-end justify-between pointer-events-auto px-[24px] py-[10px] sticky top-0 translate-x-[-50%] w-[360px]" data-name="Device/Device frame components/status bar">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-nowrap tracking-[0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]"> </p>
      </div>
      <RightIcons />
      <div className="absolute left-1/2 size-[24px] top-[18px] translate-x-[-50%]" data-name="Camera Cutout">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p34df7200} fill="var(--fill-0, #1D1B20)" fillRule="evenodd" id="Camera Cutout" />
        </svg>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-white h-[52px] left-1/2 overflow-clip shadow-[0px_4px_10px_0px_rgba(190,190,190,0.25)] top-0 translate-x-[-50%] w-[390px]" data-name="status bar">
      <div className="absolute bottom-0 h-[52px] left-1/2 pointer-events-none top-0">
        <DeviceDeviceFrameComponentsStatusBar />
      </div>
    </div>
  );
}

export default function DetailsCourseScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Details Course Screen">
      <StatusBar />
      <AutoLayout />
      <Frame8 />
      <AppBar />
    </div>
  );
}