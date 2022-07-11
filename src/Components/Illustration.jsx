import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
// import Rellax from "rellax";


const fade = keyframes`
from{opacity:0}
to{opacity:1}
`
const dash = keyframes`
from{
  stroke-dashoffset:2000
}
to{
  stroke-dashoffset:0
}
`
const Wrapper = styled.svg`
  width: 100%;
  height: 100%;

 .strand1,.strand2,.strand3,.strand4,.strand5,.strand6,.strand7,.strand8,.strand9,.strand10,.strand11,.strand12{
   stroke-dashoffset:0;
   stroke-dasharray:1000;
   animation: ${dash} 3s linear forwards ;
 }

 .blue-blub,.purple-blub{
   opacity:0 ;
   animation:${fade} 0.5s 3s ease-in-out forwards ;
 }
`;

const Illustration = () => {
  return (
    <Wrapper>
      <svg
        width="615"
        height="623"
        viewBox="0 0 615 623"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="treeframe"
      >
        <path className='strand1' d="M290.5 619V229.5L194 133V0" stroke="black" stroke-width="2" />
        <path className='strand2'
          d="M291.5 510.5L246 465V372H177.5L148 342.5H64.5L45.75 323M9 303.5H27L45.75 323M45.75 323L23.375 338.5M1 354L23.375 338.5M23.375 338.5H1"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand3'
          d="M322 622.5V228.5L417.5 133V1.5"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand4'
          d="M290.5 445L259 413.5V296.5L236.5 274H197.5L140 208.5H68H43.5L31.5 193"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand5'
          d="M108 339V320L90.5 299V276.5L61 249.5"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand6'
          d="M90.5 301.5L44.3576 253M22 229.5L44.3576 253M44.3576 253H2H50.5C47.6667 258.5 38 269.5 22 269.5"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand7'
          d="M324.5 385L351.5 353V301.5L380 270.5H424.5L481 207H526.25M585.5 195.5L571.5 207H526.25M526.25 207L571.5 159L526.25 195.5V135.5M526.25 135.5L556.5 107M526.25 135.5H556.5"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand8'
          d="M462 220V176.5C472.333 166 493 145.2 493 146C493 146.8 493 130.667 493 122.5L502.732 113M535 81.5L502.732 113M502.732 113V70.5M502.732 70.5L521 52M502.732 70.5V46"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand9'
          d="M321 428.5L371.5 374H438.5L470.5 342.5H551.5L563.5 331.19M615 301.5H595L563.5 331.19M563.5 331.19C560 324.46 555.1 309.1 563.5 301.5"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand10'
          d="M455 358V329.5C464 325.5 482 315.4 482 307"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand11'
          d="M485.5 345.5L503.5 371H559.5"
          stroke="black"
          stroke-width="2"
        />
        <path className='strand12'
          d="M252.5 293.5H228.5L210.5 311.5M210.5 311.5H191M210.5 311.5L215.5 326"
          stroke="black"
          stroke-width="2"
        />
      </svg>
      <svg  className="blue-blub" width="709" height="386" viewBox="0 0 709 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_1)">
<ellipse cx="89.5" cy="193" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<g filter="url(#filter1_d_0_1)">
<ellipse cx="239.5" cy="34" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<g filter="url(#filter2_d_0_1)">
<ellipse cx="463.5" cy="34" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<g filter="url(#filter3_d_0_1)">
<ellipse cx="588.5" cy="118" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<g filter="url(#filter4_d_0_1)">
<ellipse cx="623.5" cy="193" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<g filter="url(#filter5_d_0_1)">
<ellipse cx="667.5" cy="342" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<g filter="url(#filter6_d_0_1)">
<ellipse cx="41.5" cy="344" rx="17.5" ry="14" fill="#00F3F3"/>
</g>
<defs>
<filter id="filter0_d_0_1" x="48" y="159" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_d_0_1" x="198" y="0" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter2_d_0_1" x="422" y="0" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter3_d_0_1" x="547" y="84" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter4_d_0_1" x="582" y="159" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter5_d_0_1" x="626" y="308" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter6_d_0_1" x="0" y="310" width="83" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423653 0 0 0 0 0.983333 0 0 0 0 0.815429 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>

<svg width="807" height="603" viewBox="0 0 807 603" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_1)">
<ellipse cx="133.5" cy="282" rx="6.5" ry="5" fill="#A12EC9"/>
</g>
<g filter="url(#filter1_d_0_1)">
<circle cx="288.5" cy="406.5" r="7.5" fill="#A12EC9"/>
</g>
<g filter="url(#filter2_d_0_1)">
<circle cx="586.5" cy="397.5" r="7.5" fill="#A12EC9"/>
</g>
<g filter="url(#filter3_d_0_1)">
<circle cx="672.5" cy="464.5" r="7.5" fill="#A12EC9"/>
</g>
<g filter="url(#filter4_d_0_1)">
<circle cx="603.5" cy="130.5" r="7.5" fill="#A12EC9"/>
</g>
<defs>
<filter id="filter0_d_0_1" x="0" y="154" width="267" height="264" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="15" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="56"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.757835 0 0 0 0 0.13975 0 0 0 0 0.975 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_d_0_1" x="154" y="276" width="269" height="269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="15" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="56"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.757835 0 0 0 0 0.13975 0 0 0 0 0.975 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter2_d_0_1" x="452" y="267" width="269" height="269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="15" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="56"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.757835 0 0 0 0 0.13975 0 0 0 0 0.975 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter3_d_0_1" x="538" y="334" width="269" height="269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="15" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="56"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.757835 0 0 0 0 0.13975 0 0 0 0 0.975 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter4_d_0_1" x="469" y="0" width="269" height="269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="15" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="56"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.757835 0 0 0 0 0.13975 0 0 0 0 0.975 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>


    </Wrapper>
  );
};

export default Illustration;
