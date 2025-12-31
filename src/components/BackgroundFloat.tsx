import React from "react";

const BackgroundFloat = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Balloon 1 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "43.3924%",
          bottom: "-100px",
          animationDelay: "4.00465s",
          animationDuration: "24.1943s",
        }}
      >
        <Balloon
          width="51.951px"
          height="62.3412px"
          color="rgba(192, 132, 252, 0.867)"
          stringHeight="41.5608px"
        />
      </div>

      {/* Balloon 2 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "66.7679%",
          bottom: "-100px",
          animationDelay: "0.529629s",
          animationDuration: "20.0499s",
        }}
      >
        <Balloon
          width="47.6026px"
          height="57.1232px"
          color="rgba(255, 107, 157, 0.867)"
          stringHeight="38.0821px"
        />
      </div>

      {/* Balloon 3 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "75.8649%",
          bottom: "-100px",
          animationDelay: "4.96549s",
          animationDuration: "17.769s",
        }}
      >
        <Balloon
          width="67.6465px"
          height="81.1759px"
          color="rgba(96, 165, 250, 0.867)"
          stringHeight="54.1172px"
        />
      </div>

      {/* Balloon 4 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "7.48909%",
          bottom: "-100px",
          animationDelay: "4.64122s",
          animationDuration: "24.9786s",
        }}
      >
        <Balloon
          width="56.5919px"
          height="67.9103px"
          color="rgba(251, 191, 36, 0.867)"
          stringHeight="45.2735px"
        />
      </div>

      {/* Balloon 5 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "1.32887%",
          bottom: "-100px",
          animationDelay: "3.03377s",
          animationDuration: "15.9103s",
        }}
      >
        <Balloon
          width="59.4319px"
          height="71.3183px"
          color="rgba(52, 211, 153, 0.867)"
          stringHeight="47.5455px"
        />
      </div>

      {/* Balloon 6 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "39.4416%",
          bottom: "-100px",
          animationDelay: "1.19413s",
          animationDuration: "23.2334s",
        }}
      >
        <Balloon
          width="69.9908px"
          height="83.989px"
          color="rgba(52, 211, 153, 0.867)"
          stringHeight="55.9927px"
        />
      </div>

      {/* Balloon 7 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "91.3667%",
          bottom: "-100px",
          animationDelay: "2.08779s",
          animationDuration: "22.0437s",
        }}
      >
        <Balloon
          width="39.7685px"
          height="47.7222px"
          color="rgba(192, 132, 252, 0.867)"
          stringHeight="31.8148px"
        />
      </div>

      {/* Balloon 8 */}
      <div
        className="absolute animate-float-up opacity-30"
        style={{
          left: "53.4555%",
          bottom: "-100px",
          animationDelay: "0.784746s",
          animationDuration: "24.9532s",
        }}
      >
        <Balloon
          width="55.7206px"
          height="66.8647px"
          color="rgba(192, 132, 252, 0.867)"
          stringHeight="44.5765px"
        />
      </div>
    </div>
  );
};

export default BackgroundFloat;

/* ---------------------------------- */
/* Balloon Shape Component */
/* ---------------------------------- */

interface BalloonProps {
  width: string;
  height: string;
  color: string;
  stringHeight: string;
}

const Balloon: React.FC<BalloonProps> = ({
  width,
  height,
  color,
  stringHeight,
}) => {
  return (
    <div className="relative" style={{ width, height }}>
      {/* Balloon */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}, ${color})`,
          boxShadow: "rgba(0,0,0,0.1) -10px -10px 20px inset",
        }}
      />

      {/* String */}
      <div
        className="absolute left-1/2 top-full w-0.5 bg-gray-400"
        style={{
          height: stringHeight,
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};
