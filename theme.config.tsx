import { useConfig } from "nextra-theme-docs";

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */

const logo = (
  <div>
    <svg
      version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 1295 1295" enable-background="new 0 0 1295 1295"
    >
      <path fill="#000000" opacity="1.000000" stroke="none" 
      d="
    M588.000000,1296.000000 
      C392.000000,1296.000000 196.500000,1296.000000 1.000000,1296.000000 
      C1.000000,864.333313 1.000000,432.666656 1.000000,1.000000 
      C432.666656,1.000000 864.333313,1.000000 1296.000000,1.000000 
      C1296.000000,432.666656 1296.000000,864.333313 1296.000000,1296.000000 
      C1060.166626,1296.000000 824.333313,1296.000000 588.000000,1296.000000 
    M788.310486,382.307556 
      C779.190002,386.491699 770.069519,390.675842 760.210754,394.941193 
      C750.752197,399.270508 741.293579,403.599854 731.112488,407.991730 
      C725.744995,410.377655 720.377563,412.763580 714.302734,415.166077 
      C700.820984,421.423157 687.339233,427.680237 673.132263,433.992340 
      C665.757385,437.352539 658.382446,440.712738 650.286072,444.119537 
      C642.194702,447.785889 634.103271,451.452271 625.303528,455.193939 
      C619.871887,457.819733 614.440247,460.445526 608.268372,462.970886 
      C594.853821,469.021606 581.439270,475.072296 567.325134,481.192719 
      C564.281799,482.853333 560.998291,484.188660 558.235413,486.229095 
      C543.883606,496.827942 540.604126,514.355469 550.261536,530.133911 
      C563.466797,551.708923 576.936951,573.122498 590.377808,594.552368 
      C594.619629,601.315613 600.410522,606.468018 607.540833,610.145386 
      C615.948486,614.481506 624.270752,618.982788 632.664368,623.346497 
      C643.422058,628.939270 654.213928,634.466248 665.456665,640.519165 
      C676.408875,646.387512 687.376770,652.226746 698.308960,658.132141 
      C709.654236,664.260620 721.344666,668.235657 735.144714,664.273499 
      C740.808594,661.876038 746.472473,659.478577 752.863892,657.010986 
      C760.627380,653.485107 768.390869,649.959229 776.872131,646.215393 
      C784.257263,642.851440 791.642456,639.487488 799.760498,636.003174 
      C813.641785,629.750183 827.523071,623.497192 842.096252,617.105042 
      C847.400269,614.660889 852.704285,612.216797 858.704590,609.682251 
      C865.508911,606.562195 872.313171,603.442139 879.846741,600.162048 
      C892.337036,594.501892 904.827271,588.841736 918.030090,583.102112 
      C924.718384,579.414734 931.406738,575.727417 938.723389,571.812073 
      C945.887146,565.243469 949.008972,557.047180 949.119690,547.386230 
      C949.253113,535.750793 949.761414,524.119324 950.136169,512.487061 
      C950.761841,493.069550 951.410339,473.652771 952.072083,453.539734 
      C947.069763,455.776611 942.567139,457.762909 938.086853,459.798309 
      C919.704041,468.149597 901.328064,476.515839 882.205383,484.932434 
      C875.770569,487.869293 869.335754,490.806122 862.169189,493.891083 
      C849.764404,499.552612 837.359619,505.214111 824.208923,510.922119 
      C821.049683,512.250916 817.890442,513.579712 814.581909,514.971252 
      C809.697510,507.107239 804.924866,499.423065 800.049683,491.573883 
      C805.332458,489.089325 810.229553,486.786133 815.836121,484.232910 
      C825.358032,479.897034 834.879944,475.561188 845.098083,471.104462 
      C851.728333,468.053772 858.358582,465.003113 865.735413,461.930603 
      C867.190186,461.277832 868.648315,460.632568 870.099121,459.971130 
      C882.414246,454.356689 894.728088,448.739380 907.782349,443.031036 
      C918.766846,438.137726 929.478882,432.440033 940.819336,428.597382 
      C950.451355,425.333618 955.074463,420.347260 953.262756,410.082703 
      C952.864441,407.825806 952.978149,405.452026 953.070312,403.140564 
      C953.266846,398.212402 953.817810,393.290619 953.836548,388.364746 
      C953.870544,379.420959 955.081787,370.157196 953.210815,361.592987 
      C948.130188,338.337219 918.844666,324.651245 895.698181,334.246033 
      C881.220703,340.247284 867.102112,347.114319 852.096313,353.766479 
      C838.319885,359.987854 824.543518,366.209229 810.029602,372.604126 
      C803.024719,375.807861 796.019836,379.011566 788.310486,382.307556 
    M382.271851,716.160767 
      C374.793579,719.948486 367.315308,723.736145 359.214600,727.836731 
      C351.166107,734.247803 347.200684,742.597778 346.928162,752.886169 
      C346.492157,769.348816 345.682739,785.802917 345.378754,802.267090 
      C345.112091,816.708923 345.323059,831.159607 345.323059,845.722595 
      C344.628632,845.652527 345.011597,845.815491 345.268463,845.699463 
      C367.853516,835.495422 390.428864,825.269836 413.746277,815.054260 
      C421.160828,811.647705 428.575348,808.241150 436.708130,804.821289 
      C446.134064,800.492065 455.559967,796.162842 465.705933,791.819153 
      C470.225922,789.788818 474.745911,787.758484 479.642151,785.559082 
      C484.482727,793.299133 489.252014,800.925171 494.094574,808.668457 
      C488.775818,811.257141 483.889832,813.635132 478.264832,816.028137 
      C468.160767,820.637451 458.056671,825.246765 447.217102,829.963440 
      C437.796021,834.260803 428.374969,838.558228 418.219391,842.966370 
      C409.478607,846.974487 400.737793,850.982666 391.258698,855.013672 
      C376.401337,861.644348 361.565033,868.323059 346.666351,874.859436 
      C344.123199,875.975098 342.962982,877.264709 342.912537,880.272766 
      C342.655548,895.592346 342.026062,910.905396 341.717621,926.224609 
      C341.648071,929.678833 341.864502,933.276306 342.756622,936.590515 
      C349.119873,960.230713 377.438599,973.390991 401.019623,963.407410 
      C416.175507,956.990784 431.018158,949.834473 446.741943,943.029785 
      C455.219666,939.167847 463.697388,935.305847 472.896881,931.249207 
      C482.318909,926.986267 491.740906,922.723328 501.883179,918.252258 
      C512.264954,913.528992 522.646790,908.805664 533.772217,904.051086 
      C543.509583,899.626282 553.246948,895.201477 563.680481,890.676453 
      C570.136475,887.485779 576.592529,884.295105 583.817871,881.071350 
      C593.438599,876.803101 603.059265,872.534851 613.383606,868.250732 
      C623.252319,863.797058 633.121033,859.343323 643.708313,854.847046 
      C651.198364,851.396545 658.688416,847.946045 666.915527,844.338684 
      C674.980774,840.665405 683.046082,836.992126 691.846191,833.183411 
      C701.267883,828.805237 710.689514,824.427063 720.849304,820.015564 
      C745.128906,811.510376 752.840759,790.016663 739.364990,768.294128 
      C730.070068,753.311096 720.764526,738.334167 711.359375,723.420288 
      C706.750427,716.111877 702.255066,708.689270 697.072021,701.796814 
      C691.174561,693.954407 681.962219,690.566284 673.601135,686.164429 
      C655.754089,676.768433 637.855164,667.470642 619.414917,657.722107 
      C609.163757,652.296692 599.089722,646.489868 588.585327,641.609558 
      C583.466736,639.231445 577.544739,638.582458 571.083252,636.998840 
      C560.771057,636.170654 551.640869,639.749878 542.126099,644.787537 
      C534.706116,648.164185 527.286133,651.540771 519.137756,654.959595 
      C508.754425,659.679382 498.371094,664.399231 487.270660,669.182434 
      C478.157166,673.383423 469.043671,677.584351 459.185638,681.867981 
      C451.982574,685.176147 444.779541,688.484253 436.871216,691.908081 
      C428.576599,695.662537 420.281982,699.416931 411.271942,703.203125 
      C401.845062,707.517212 392.418213,711.831360 382.271851,716.160767 
    z"/>
    <path fill="#9E9E9E" opacity="1.000000" stroke="none" 
      d="
    M841.404358,617.244202 
      C827.523071,623.497192 813.641785,629.750183 799.347778,635.704468 
      C794.604797,628.549744 790.206970,621.735229 785.960083,614.828003 
      C779.436646,604.218018 773.138000,593.468506 766.526001,582.914734 
      C755.516846,565.342407 744.212097,547.954834 733.265503,530.344116 
      C724.681030,516.533325 716.570312,502.428558 708.031982,488.588318 
      C696.751465,470.302856 685.258911,452.148163 673.857483,433.937286 
      C687.339233,427.680237 700.820984,421.423157 714.707642,415.497498 
      C719.071899,422.549011 722.886780,429.359436 727.018555,435.971802 
      C738.180908,453.835754 749.519836,471.589294 760.710449,489.435730 
      C772.263000,507.859528 783.707275,526.351196 795.228516,544.794678 
      C807.102600,563.802795 818.970947,582.814880 830.933472,601.767334 
      C834.256409,607.031921 837.905151,612.090881 841.404358,617.244202 
    z"/>
    <path fill="#757575" opacity="1.000000" stroke="none" 
      d="
    M568.024719,481.123047 
      C581.439270,475.072296 594.853821,469.021606 608.682556,463.369202 
      C610.057373,465.500549 610.931946,467.288300 611.992126,468.958099 
      C622.022095,484.755310 632.212097,500.452454 642.107544,516.333191 
      C659.014771,543.467041 675.695984,570.741516 692.565002,597.899292 
      C702.004089,613.095581 711.630737,628.175232 721.171265,643.308472 
      C725.582642,650.305786 729.990234,657.305603 734.399536,664.304321 
      C721.344666,668.235657 709.654236,664.260620 698.308960,658.132141 
      C687.376770,652.226746 676.408875,646.387512 665.183105,639.913391 
      C661.329285,632.987610 657.853638,626.605347 654.144409,620.361877 
      C648.298157,610.521423 642.415894,600.698364 636.331970,591.004089 
      C624.860168,572.724426 613.210510,554.556519 601.680054,536.313538 
      C593.609253,523.544250 585.544678,510.769897 577.616882,497.911804 
      C574.236145,492.428558 571.211304,486.725983 568.024719,481.123047 
    z"/>
    <path fill="#909090" opacity="1.000000" stroke="none" 
      d="
    M642.989746,854.889587 
      C633.121033,859.343323 623.252319,863.797058 612.689392,868.073975 
      C603.487122,854.832947 594.846191,841.852783 586.510986,828.679199 
      C579.156555,817.055908 572.223633,805.166809 564.960938,793.484375 
      C553.045410,774.317627 541.025513,755.215759 529.026611,736.101013 
      C520.916199,723.180847 512.662537,710.349304 504.668793,697.357605 
      C498.940613,688.048035 493.536469,678.539062 487.987762,669.119019 
      C498.371094,664.399231 508.754425,659.679382 519.775818,655.148315 
      C525.832581,663.666992 531.406006,671.901184 536.633667,680.349365 
      C544.484436,693.036621 551.905151,705.992126 559.853577,718.616394 
      C569.022583,733.179199 578.725464,747.405823 587.898865,761.965881 
      C595.840393,774.570801 603.267761,787.498291 611.100830,800.172974 
      C619.818542,814.279053 628.864441,828.183411 637.486633,842.346619 
      C639.839661,846.211853 641.183044,850.691772 642.989746,854.889587 
    z"/>
    <path fill="#E4E4E4" opacity="1.000000" stroke="none" 
      d="
    M446.001190,943.009705 
      C431.018158,949.834473 416.175507,956.990784 401.019623,963.407410 
      C377.438599,973.390991 349.119873,960.230713 342.756622,936.590515 
      C341.864502,933.276306 341.648071,929.678833 341.717621,926.224609 
      C342.026062,910.905396 342.655548,895.592346 342.912537,880.272766 
      C342.962982,877.264709 344.123199,875.975098 346.666351,874.859436 
      C361.565033,868.323059 376.401337,861.644348 391.765808,855.317261 
      C395.877960,861.162170 399.584991,866.640198 403.069061,872.256470 
      C413.533936,889.125732 423.956787,906.021423 434.301086,922.964844 
      C438.331696,929.566772 442.108704,936.323486 446.001190,943.009705 
    z"/>
    <path fill="#E4E4E4" opacity="1.000000" stroke="none" 
      d="
    M852.822388,353.592896 
      C867.102112,347.114319 881.220703,340.247284 895.698181,334.246033 
      C918.844666,324.651245 948.130188,338.337219 953.210815,361.592987 
      C955.081787,370.157196 953.870544,379.420959 953.836548,388.364746 
      C953.817810,393.290619 953.266846,398.212402 953.070312,403.140564 
      C952.978149,405.452026 952.864441,407.825806 953.262756,410.082703 
      C955.074463,420.347260 950.451355,425.333618 940.819336,428.597382 
      C929.478882,432.440033 918.766846,438.137726 907.273804,442.752441 
      C902.696228,436.012024 898.587341,429.574890 894.565979,423.083557 
      C884.166626,406.296692 873.730225,389.531830 863.468872,372.660736 
      C859.688721,366.445526 856.358093,359.956848 852.822388,353.592896 
    z"/>
    <path fill="#9E9E9E" opacity="1.000000" stroke="none" 
      d="
    M487.629211,669.150757 
      C493.536469,678.539062 498.940613,688.048035 504.668793,697.357605 
      C512.662537,710.349304 520.916199,723.180847 529.026611,736.101013 
      C541.025513,755.215759 553.045410,774.317627 564.960938,793.484375 
      C572.223633,805.166809 579.156555,817.055908 586.510986,828.679199 
      C594.846191,841.852783 603.487122,854.832947 612.337524,868.081909 
      C603.059265,872.534851 593.438599,876.803101 583.275513,880.779175 
      C578.899048,874.483337 574.965210,868.540710 571.248718,862.465149 
      C557.917908,840.672668 544.753723,818.777893 531.345154,797.033630 
      C521.172913,780.537537 510.748688,764.196533 500.392365,747.814453 
      C490.562012,732.264221 480.576385,716.811157 470.859497,701.190674 
      C466.941895,694.892944 463.557312,688.263672 459.930145,681.785278 
      C469.043671,677.584351 478.157166,673.383423 487.629211,669.150757 
    z"/>
    <path fill="#AFAFAF" opacity="1.000000" stroke="none" 
      d="
    M479.003845,816.013184 
      C483.889832,813.635132 488.775818,811.257141 494.094574,808.668457 
      C489.252014,800.925171 484.482727,793.299133 479.642151,785.559082 
      C474.745911,787.758484 470.225922,789.788818 465.335693,791.469910 
      C460.342834,783.491211 455.806702,775.807739 451.080231,768.243164 
      C439.904053,750.356201 428.567474,732.569153 417.466461,714.635986 
      C415.250244,711.055725 413.794037,707.005127 411.987366,703.171387 
      C420.281982,699.416931 428.576599,695.662537 437.555542,692.014038 
      C439.151794,693.066956 440.249176,693.894531 440.947235,694.979065 
      C448.660461,706.962708 456.391418,718.936218 463.960480,731.010986 
      C474.614349,748.006775 485.095795,765.110657 495.724762,782.122131 
      C506.800446,799.848694 518.036438,817.475281 529.063721,835.231750 
      C536.677185,847.491211 544.039185,859.906616 551.544983,872.233215 
      C555.322021,878.436279 559.169006,884.596863 562.984314,890.776672 
      C553.246948,895.201477 543.509583,899.626282 533.349854,903.711426 
      C520.142456,882.675415 507.354431,861.980713 494.573547,841.281677 
      C489.375732,832.863770 484.193298,824.436279 479.003845,816.013184 
    z"/>
    <path fill="#666666" opacity="1.000000" stroke="none" 
      d="
    M619.977539,658.132568 
      C637.855164,667.470642 655.754089,676.768433 673.601135,686.164429 
      C681.962219,690.566284 691.174561,693.954407 697.072021,701.796814 
      C702.255066,708.689270 706.750427,716.111877 711.359375,723.420288 
      C720.764526,738.334167 730.070068,753.311096 739.364990,768.294128 
      C752.840759,790.016663 745.128906,811.510376 720.203735,819.827759 
      C710.886292,805.509338 702.345215,791.296204 693.506409,777.270752 
      C684.226135,762.544800 674.526794,748.082825 665.252808,733.353027 
      C652.976013,713.854065 640.863464,694.250366 628.838501,674.594971 
      C625.591248,669.287170 622.915588,663.629578 619.977539,658.132568 
    z"/>
    <path fill="#757575" opacity="1.000000" stroke="none" 
      d="
    M619.696228,657.927368 
      C622.915588,663.629578 625.591248,669.287170 628.838501,674.594971 
      C640.863464,694.250366 652.976013,713.854065 665.252808,733.353027 
      C674.526794,748.082825 684.226135,762.544800 693.506409,777.270752 
      C702.345215,791.296204 710.886292,805.509338 719.834717,819.844482 
      C710.689514,824.427063 701.267883,828.805237 691.443359,832.855103 
      C690.458923,830.993347 690.111633,829.313660 689.260193,827.948425 
      C678.561584,810.794312 667.758423,793.705505 657.045593,776.560242 
      C644.389709,756.305359 631.864746,735.968445 619.156006,715.746887 
      C606.002686,694.818054 592.579285,674.057983 579.544800,653.056091 
      C576.468689,648.099792 574.476990,642.470520 571.986450,637.150757 
      C577.544739,638.582458 583.466736,639.231445 588.585327,641.609558 
      C599.089722,646.489868 609.163757,652.296692 619.696228,657.927368 
    z"/>
    <path fill="#878787" opacity="1.000000" stroke="none" 
      d="
    M776.154358,646.433350 
      C768.390869,649.959229 760.627380,653.485107 752.192261,656.873657 
      C747.241516,649.853333 743.014343,642.937378 738.672852,636.094055 
      C728.458862,619.994568 718.107178,603.981934 707.965332,587.837402 
      C695.980896,568.759583 684.173401,549.570801 672.255371,530.451172 
      C669.369080,525.820862 666.251465,521.333313 663.414307,516.674072 
      C657.987244,507.761353 652.738586,498.740082 647.317566,489.823669 
      C640.265747,478.224884 633.118225,466.684265 626.011902,455.118652 
      C634.103271,451.452271 642.194702,447.785889 650.654724,444.458649 
      C652.864441,447.894867 654.666260,451.016174 656.553284,454.084991 
      C665.487061,468.613464 674.360291,483.180115 683.414551,497.633270 
      C694.233337,514.903015 705.299561,532.017883 716.102417,549.297424 
      C728.823853,569.645874 741.384644,590.094788 754.002258,610.508179 
      C761.399170,622.475220 768.771118,634.457703 776.154358,646.433350 
    z"/>
    <path fill="#7E7E7E" opacity="1.000000" stroke="none" 
      d="
    M571.534851,637.074829 
      C574.476990,642.470520 576.468689,648.099792 579.544800,653.056091 
      C592.579285,674.057983 606.002686,694.818054 619.156006,715.746887 
      C631.864746,735.968445 644.389709,756.305359 657.045593,776.560242 
      C667.758423,793.705505 678.561584,810.794312 689.260193,827.948425 
      C690.111633,829.313660 690.458923,830.993347 691.075928,832.922852 
      C683.046082,836.992126 674.980774,840.665405 666.473694,844.029297 
      C654.358582,824.652283 642.772644,805.530396 630.984985,786.533691 
      C621.103149,770.608459 610.933899,754.861877 600.985596,738.977539 
      C588.050049,718.323486 575.155090,697.643494 562.346008,676.910828 
      C555.730042,666.202454 549.337463,655.356018 542.843994,644.571960 
      C551.640869,639.749878 560.771057,636.170654 571.534851,637.074829 
    z"/>
    <path fill="#666666" opacity="1.000000" stroke="none" 
      d="
    M567.674927,481.157898 
      C571.211304,486.725983 574.236145,492.428558 577.616882,497.911804 
      C585.544678,510.769897 593.609253,523.544250 601.680054,536.313538 
      C613.210510,554.556519 624.860168,572.724426 636.331970,591.004089 
      C642.415894,600.698364 648.298157,610.521423 654.144409,620.361877 
      C657.853638,626.605347 661.329285,632.987610 664.950317,639.664551 
      C654.213928,634.466248 643.422058,628.939270 632.664368,623.346497 
      C624.270752,618.982788 615.948486,614.481506 607.540833,610.145386 
      C600.410522,606.468018 594.619629,601.315613 590.377808,594.552368 
      C576.936951,573.122498 563.466797,551.708923 550.261536,530.133911 
      C540.604126,514.355469 543.883606,496.827942 558.235413,486.229095 
      C560.998291,484.188660 564.281799,482.853333 567.674927,481.157898 
    z"/>
    <path fill="#909090" opacity="1.000000" stroke="none" 
      d="
    M776.513245,646.324341 
      C768.771118,634.457703 761.399170,622.475220 754.002258,610.508179 
      C741.384644,590.094788 728.823853,569.645874 716.102417,549.297424 
      C705.299561,532.017883 694.233337,514.903015 683.414551,497.633270 
      C674.360291,483.180115 665.487061,468.613464 656.553284,454.084991 
      C654.666260,451.016174 652.864441,447.894867 651.015503,444.435364 
      C658.382446,440.712738 665.757385,437.352539 673.494873,433.964813 
      C685.258911,452.148163 696.751465,470.302856 708.031982,488.588318 
      C716.570312,502.428558 724.681030,516.533325 733.265503,530.344116 
      C744.212097,547.954834 755.516846,565.342407 766.526001,582.914734 
      C773.138000,593.468506 779.436646,604.218018 785.960083,614.828003 
      C790.206970,621.735229 794.604797,628.549744 798.981323,635.764648 
      C791.642456,639.487488 784.257263,642.851440 776.513245,646.324341 
    z"/>
    <path fill="#AFAFAF" opacity="1.000000" stroke="none" 
      d="
    M815.126648,484.482971 
      C810.229553,486.786133 805.332458,489.089325 800.049683,491.573883 
      C804.924866,499.423065 809.697510,507.107239 814.581909,514.971252 
      C817.890442,513.579712 821.049683,512.250916 824.634888,511.260986 
      C829.577209,519.135010 834.026123,526.711670 838.625916,534.195679 
      C845.565979,545.487244 852.669678,556.678406 859.595154,567.978821 
      C866.175171,578.715454 872.615662,589.537537 879.117493,600.322083 
      C872.313171,603.442139 865.508911,606.562195 858.347839,609.373840 
      C857.814575,608.431946 857.775208,607.713196 857.441833,607.177307 
      C846.322632,589.306946 835.230896,571.419067 824.018555,553.607239 
      C809.453491,530.469299 794.714905,507.440491 780.189453,484.277893 
      C766.620789,462.641083 753.266174,440.870148 739.735168,419.209564 
      C737.306396,415.321594 734.478577,411.682922 731.834961,407.929199 
      C741.293579,403.599854 750.752197,399.270508 760.631531,395.263062 
      C761.909607,397.178345 762.689331,398.819580 763.636963,400.357300 
      C768.846985,408.811493 774.101746,417.238037 779.334106,425.678436 
      C787.613220,439.033569 795.934021,452.363190 804.141479,465.762207 
      C807.919983,471.930908 811.471985,478.238434 815.126648,484.482971 
    z"/>
    <path fill="#878787" opacity="1.000000" stroke="none" 
      d="
    M542.485046,644.679749 
      C549.337463,655.356018 555.730042,666.202454 562.346008,676.910828 
      C575.155090,697.643494 588.050049,718.323486 600.985596,738.977539 
      C610.933899,754.861877 621.103149,770.608459 630.984985,786.533691 
      C642.772644,805.530396 654.358582,824.652283 666.105164,844.107727 
      C658.688416,847.946045 651.198364,851.396545 643.348999,854.868286 
      C641.183044,850.691772 639.839661,846.211853 637.486633,842.346619 
      C628.864441,828.183411 619.818542,814.279053 611.100830,800.172974 
      C603.267761,787.498291 595.840393,774.570801 587.898865,761.965881 
      C578.725464,747.405823 569.022583,733.179199 559.853577,718.616394 
      C551.905151,705.992126 544.484436,693.036621 536.633667,680.349365 
      C531.406006,671.901184 525.832581,663.666992 520.140015,655.127197 
      C527.286133,651.540771 534.706116,648.164185 542.485046,644.679749 
    z"/>
    <path fill="#A7A7A7" opacity="1.000000" stroke="none" 
      d="
    M563.332397,890.726562 
      C559.169006,884.596863 555.322021,878.436279 551.544983,872.233215 
      C544.039185,859.906616 536.677185,847.491211 529.063721,835.231750 
      C518.036438,817.475281 506.800446,799.848694 495.724762,782.122131 
      C485.095795,765.110657 474.614349,748.006775 463.960480,731.010986 
      C456.391418,718.936218 448.660461,706.962708 440.947235,694.979065 
      C440.249176,693.894531 439.151794,693.066956 437.908142,691.956238 
      C444.779541,688.484253 451.982574,685.176147 459.557892,681.826660 
      C463.557312,688.263672 466.941895,694.892944 470.859497,701.190674 
      C480.576385,716.811157 490.562012,732.264221 500.392365,747.814453 
      C510.748688,764.196533 521.172913,780.537537 531.345154,797.033630 
      C544.753723,818.777893 557.917908,840.672668 571.248718,862.465149 
      C574.965210,868.540710 578.899048,874.483337 582.890869,880.795715 
      C576.592529,884.295105 570.136475,887.485779 563.332397,890.726562 
    z"/>
    <path fill="#D2D2D2" opacity="1.000000" stroke="none" 
      d="
    M852.459351,353.679688 
      C856.358093,359.956848 859.688721,366.445526 863.468872,372.660736 
      C873.730225,389.531830 884.166626,406.296692 894.565979,423.083557 
      C898.587341,429.574890 902.696228,436.012024 906.903809,442.798340 
      C894.728088,448.739380 882.414246,454.356689 870.099121,459.971130 
      C868.648315,460.632568 867.190186,461.277832 865.358215,461.569336 
      C862.477051,456.780701 860.139038,452.249329 857.440125,447.944214 
      C846.532959,430.545624 835.439941,413.263306 824.571411,395.840820 
      C819.778076,388.157135 815.357117,380.241119 810.767090,372.430603 
      C824.543518,366.209229 838.319885,359.987854 852.459351,353.679688 
    z"/>
    <path fill="#A7A7A7" opacity="1.000000" stroke="none" 
      d="
    M731.473755,407.960449 
      C734.478577,411.682922 737.306396,415.321594 739.735168,419.209564 
      C753.266174,440.870148 766.620789,462.641083 780.189453,484.277893 
      C794.714905,507.440491 809.453491,530.469299 824.018555,553.607239 
      C835.230896,571.419067 846.322632,589.306946 857.441833,607.177307 
      C857.775208,607.713196 857.814575,608.431946 857.999695,609.419067 
      C852.704285,612.216797 847.400269,614.660889 841.750305,617.174622 
      C837.905151,612.090881 834.256409,607.031921 830.933472,601.767334 
      C818.970947,582.814880 807.102600,563.802795 795.228516,544.794678 
      C783.707275,526.351196 772.263000,507.859528 760.710449,489.435730 
      C749.519836,471.589294 738.180908,453.835754 727.018555,435.971802 
      C722.886780,429.359436 719.071899,422.549011 715.061340,415.489197 
      C720.377563,412.763580 725.744995,410.377655 731.473755,407.960449 
    z"/>
    <path fill="#D2D2D2" opacity="1.000000" stroke="none" 
      d="
    M882.949585,484.876556 
      C901.328064,476.515839 919.704041,468.149597 938.086853,459.798309 
      C942.567139,457.762909 947.069763,455.776611 952.072083,453.539734 
      C951.410339,473.652771 950.761841,493.069550 950.136169,512.487061 
      C949.761414,524.119324 949.253113,535.750793 949.119690,547.386230 
      C949.008972,557.047180 945.887146,565.243469 938.069336,571.849976 
      C932.191406,564.075745 926.800049,556.369629 921.778503,548.429565 
      C911.064209,531.488037 900.504517,514.448181 889.967468,497.395508 
      C887.454956,493.329529 885.279846,489.055115 882.949585,484.876556 
    z"/>
    <path fill="#D2D2D2" opacity="1.000000" stroke="none" 
      d="
    M413.004852,815.045715 
      C390.428864,825.269836 367.853516,835.495422 345.268463,845.699463 
      C345.011597,845.815491 344.628632,845.652527 345.323059,845.722595 
      C345.323059,831.159607 345.112091,816.708923 345.378754,802.267090 
      C345.682739,785.802917 346.492157,769.348816 346.928162,752.886169 
      C347.200684,742.597778 351.166107,734.247803 359.656738,728.034790 
      C365.330231,736.679382 370.533966,745.143127 375.798950,753.568604 
      C385.182678,768.585144 394.684875,783.528503 403.964905,798.608643 
      C407.238159,803.927673 410.006165,809.557678 413.004852,815.045715 
    z"/>
    <path fill="#7E7E7E" opacity="1.000000" stroke="none" 
      d="
    M625.657715,455.156311 
      C633.118225,466.684265 640.265747,478.224884 647.317566,489.823669 
      C652.738586,498.740082 657.987244,507.761353 663.414307,516.674072 
      C666.251465,521.333313 669.369080,525.820862 672.255371,530.451172 
      C684.173401,549.570801 695.980896,568.759583 707.965332,587.837402 
      C718.107178,603.981934 728.458862,619.994568 738.672852,636.094055 
      C743.014343,642.937378 747.241516,649.853333 751.828491,656.908691 
      C746.472473,659.478577 740.808594,661.876038 734.772095,664.288940 
      C729.990234,657.305603 725.582642,650.305786 721.171265,643.308472 
      C711.630737,628.175232 702.004089,613.095581 692.565002,597.899292 
      C675.695984,570.741516 659.014771,543.467041 642.107544,516.333191 
      C632.212097,500.452454 622.022095,484.755310 611.992126,468.958099 
      C610.931946,467.288300 610.057373,465.500549 609.052734,463.419434 
      C614.440247,460.445526 619.871887,457.819733 625.657715,455.156311 
    z"/>
    <path fill="#BABABA" opacity="1.000000" stroke="none" 
      d="
    M879.482117,600.242065 
      C872.615662,589.537537 866.175171,578.715454 859.595154,567.978821 
      C852.669678,556.678406 845.565979,545.487244 838.625916,534.195679 
      C834.026123,526.711670 829.577209,519.135010 825.007812,511.237732 
      C837.359619,505.214111 849.764404,499.552612 862.559448,494.220337 
      C864.474365,497.985748 865.620422,501.657532 867.587341,504.818481 
      C877.554443,520.835876 887.725098,536.726685 897.843628,552.649658 
      C904.317810,562.837891 910.825073,573.005005 917.317566,583.181580 
      C904.827271,588.841736 892.337036,594.501892 879.482117,600.242065 
    z"/>
    <path fill="#BABABA" opacity="1.000000" stroke="none" 
      d="
    M478.634338,816.020630 
      C484.193298,824.436279 489.375732,832.863770 494.573547,841.281677 
      C507.354431,861.980713 520.142456,882.675415 532.978027,903.727051 
      C522.646790,908.805664 512.264954,913.528992 501.454224,917.971680 
      C498.272064,913.189270 495.555237,908.664856 492.759583,904.189636 
      C479.325409,882.684387 465.822510,861.221863 452.476135,839.662415 
      C450.595459,836.624451 449.442444,833.135986 447.952606,829.856079 
      C458.056671,825.246765 468.160767,820.637451 478.634338,816.020630 
    z"/>
    <path fill="#C4C4C4" opacity="1.000000" stroke="none" 
      d="
    M447.584839,829.909790 
      C449.442444,833.135986 450.595459,836.624451 452.476135,839.662415 
      C465.822510,861.221863 479.325409,882.684387 492.759583,904.189636 
      C495.555237,908.664856 498.272064,913.189270 501.094116,918.075745 
      C491.740906,922.723328 482.318909,926.986267 472.461426,930.968994 
      C464.533234,918.205017 457.172913,905.639343 449.511993,893.259705 
      C441.226013,879.869995 432.594269,866.694580 424.261597,853.333191 
      C422.198029,850.024231 420.707733,846.357788 418.953918,842.855652 
      C428.374969,838.558228 437.796021,834.260803 447.584839,829.909790 
    z"/>
    <path fill="#BABABA" opacity="1.000000" stroke="none" 
      d="
    M411.629639,703.187256 
      C413.794037,707.005127 415.250244,711.055725 417.466461,714.635986 
      C428.567474,732.569153 439.904053,750.356201 451.080231,768.243164 
      C455.806702,775.807739 460.342834,783.491211 464.975677,791.477173 
      C455.559967,796.162842 446.134064,800.492065 436.347046,804.453125 
      C435.344025,802.425720 434.936920,800.620789 434.015259,799.135071 
      C431.479370,795.047180 428.620636,791.159729 426.079773,787.074768 
      C413.184662,766.343262 400.326569,745.588562 387.521820,724.801208 
      C385.817993,722.035217 384.492218,719.036438 382.991333,716.145447 
      C392.418213,711.831360 401.845062,707.517212 411.629639,703.187256 
    z"/>
    <path fill="#BABABA" opacity="1.000000" stroke="none" 
      d="
    M815.481384,484.357971 
      C811.471985,478.238434 807.919983,471.930908 804.141479,465.762207 
      C795.934021,452.363190 787.613220,439.033569 779.334106,425.678436 
      C774.101746,417.238037 768.846985,408.811493 763.636963,400.357300 
      C762.689331,398.819580 761.909607,397.178345 761.000671,395.222473 
      C770.069519,390.675842 779.190002,386.491699 788.719116,382.599365 
      C794.798157,392.031219 800.494324,401.155487 806.133789,410.314697 
      C817.517456,428.803375 828.852356,447.322144 840.262451,465.794464 
      C841.452881,467.721741 843.013184,469.420532 844.401855,471.225342 
      C834.879944,475.561188 825.358032,479.897034 815.481384,484.357971 
    z"/>
    <path fill="#D2D2D2" opacity="1.000000" stroke="none" 
      d="
    M418.586639,842.911011 
      C420.707733,846.357788 422.198029,850.024231 424.261597,853.333191 
      C432.594269,866.694580 441.226013,879.869995 449.511993,893.259705 
      C457.172913,905.639343 464.533234,918.205017 472.100525,931.066284 
      C463.697388,935.305847 455.219666,939.167847 446.371582,943.019775 
      C442.108704,936.323486 438.331696,929.566772 434.301086,922.964844 
      C423.956787,906.021423 413.533936,889.125732 403.069061,872.256470 
      C399.584991,866.640198 395.877960,861.162170 392.134949,855.305847 
      C400.737793,850.982666 409.478607,846.974487 418.586639,842.911011 
    z"/>
    <path fill="#C4C4C4" opacity="1.000000" stroke="none" 
      d="
    M382.631592,716.153076 
      C384.492218,719.036438 385.817993,722.035217 387.521820,724.801208 
      C400.326569,745.588562 413.184662,766.343262 426.079773,787.074768 
      C428.620636,791.159729 431.479370,795.047180 434.015259,799.135071 
      C434.936920,800.620789 435.344025,802.425720 435.987915,804.459778 
      C428.575348,808.241150 421.160828,811.647705 413.375549,815.049988 
      C410.006165,809.557678 407.238159,803.927673 403.964905,798.608643 
      C394.684875,783.528503 385.182678,768.585144 375.798950,753.568604 
      C370.533966,745.143127 365.330231,736.679382 359.967957,727.878357 
      C367.315308,723.736145 374.793579,719.948486 382.631592,716.153076 
    z"/>
    <path fill="#C4C4C4" opacity="1.000000" stroke="none" 
      d="
    M844.750000,471.164917 
      C843.013184,469.420532 841.452881,467.721741 840.262451,465.794464 
      C828.852356,447.322144 817.517456,428.803375 806.133789,410.314697 
      C800.494324,401.155487 794.798157,392.031219 789.071289,382.553223 
      C796.019836,379.011566 803.024719,375.807861 810.398315,372.517334 
      C815.357117,380.241119 819.778076,388.157135 824.571411,395.840820 
      C835.439941,413.263306 846.532959,430.545624 857.440125,447.944214 
      C860.139038,452.249329 862.477051,456.780701 864.984924,461.580261 
      C858.358582,465.003113 851.728333,468.053772 844.750000,471.164917 
    z"/>
    <path fill="#C4C4C4" opacity="1.000000" stroke="none" 
      d="
    M917.673828,583.141846 
      C910.825073,573.005005 904.317810,562.837891 897.843628,552.649658 
      C887.725098,536.726685 877.554443,520.835876 867.587341,504.818481 
      C865.620422,501.657532 864.474365,497.985748 862.925293,494.146240 
      C869.335754,490.806122 875.770569,487.869293 882.577515,484.904480 
      C885.279846,489.055115 887.454956,493.329529 889.967468,497.395508 
      C900.504517,514.448181 911.064209,531.488037 921.778503,548.429565 
      C926.800049,556.369629 932.191406,564.075745 937.755127,571.963989 
      C931.406738,575.727417 924.718384,579.414734 917.673828,583.141846 
    z"/>
      <defs>
        <linearGradient
          id="paint0_linear_304_75"
          x1="571.165"
          y1="190.99"
          x2="648.844"
          y2="611.621"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DB0632" />
          <stop offset="0.2" stop-color="#CB0730" />
          <stop offset="0.72" stop-color="#A70B2B" />
          <stop offset="1" stop-color="#990D2A" />
        </linearGradient>
      </defs>
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
      span:td-logo {
        width: 25%;
        height: 25%;
      }
      svg {
        width: 20%;
        height: auto;
        margin-left: -20px;
      }
    `}</style>
  </div>
);

export default {
  logo,
  project: {
    link: "https://github.com/spedx-io",
  },
  footer: {
    text: "© 2023 SpedX Exchange"
  },
  chat: {
    link: "https://discord.gg/spedx"
  },
  docsRepositoryBase: "https://github.com/spedx-io/docs",
  editLink: {
    text: "Contribute to this page",
  },
  faviconGlyph: "✦",
  head: (
    <>
      <meta property="og:title" content="SpedX" />
      <meta
        property="og:description"
        content="SpedX is a Hybrid Orderbook-MM Exchange on Solana to trade Perpetuals and ZDFs with maximal capital efficiency."
      />
      <meta
        property="og:image"
        content="https://docs.spedx.exchange/banner.jpg"
      />
      <title>SpedX Docs</title>

      <meta property="og:url" content="https://docs.spedx.exchange" />

      <meta property="og:type" content="website" />
      <meta name="twitter:site" content="@spedxhq" />
      <meta name="twitter:title" content="SpedX Docs" />
      <meta name="twitter:creator" content="@spedxhq" />
      <meta
        name="twitter:image"
        content="https://docs.spedx.exchange/banner.jpg"
      />
      <meta
        name="twitter:description"
        content="SpedX is a Hybrid Orderbook-MM Exchange on Solana to trade Perpetuals and ZDFs with maximal capital efficiency."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:description"
        content="SpedX is a Hybrid Orderbook-MM Exchange on Solana to trade Perpetuals and ZDFs with maximal capital efficiency."
      />
    </>
  ),
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      additionalLinkTags: [
        {
          href: "/public/spedx-logo-2.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        }
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "SpedX", name: "apple-mobile-web-app-title" },
        { content: "#fff", name: "msapplication-TileColor" },
        { content: "/ms-icon-144x144.png", name: "msapplication-TileImage" },
      ],
      description:
        "SpedX is a Hybrid Orderbook-MM Exchange on Solana to trade Perpetuals and ZDFs with maximal capital efficiency",
      openGraph: {
        images: [
          {
            url: "/spedx-logo-2.png",
          },
        ],
      },
      titleTemplate: "SpedX Docs - %s",
      twitter: {
        cardType: "summary_large_image",
        site: "https://github.com/spedx-io",
      },
    };
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
};