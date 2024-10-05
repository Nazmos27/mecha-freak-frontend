import SectionHeader from "../../components/shared/SectionHeader";

export default function Customization() {
  return (
    <div className="flex min-h-svh border-2 justify-center items-center md:p-16 md:gap-8">
      <div className="md:w-1/2 ">
        <img
          src="https://i.ibb.co.com/pj5F5pN/CIDOO-V75-Pro-Matte-Switch-Linear.jpg"
          alt=""
          className="rounded-2xl"
        />
        
        {/* <img
          src="https://i.ibb.co.com/7Chb3Ry/YUNZII-Keynovo-IF98-Pro-Tri-Mode-Wireless-Bluetooth-Hot-Swappable-Gasket-Mechanical-Gaming-Keyboard.jpg"
          alt=""
        />
        <img
          src="https://i.ibb.co.com/LCG32vL/4952-00.jpg"
          alt=""
          className="object-contain"
        /> */}
      </div>
      <div className="md:w-1/2">
        <SectionHeader title="Customizable Options" description="" />
        <ul className="list-disc list-inside space-y-4">
          <li>
            <span className="font-bold text-[#247674]">
              Swappable Switches:
            </span>{" "}
            Easily swap out switches to match your typing preferences without
            any soldering required.
          </li>
          <li>
            <span className="font-bold text-[#247674]">
              Programmable Macros:
            </span>{" "}
            Assign custom functions to any key for improved efficiency in both
            work and play.
          </li>
          <li>
            <span className="font-bold text-[#247674]">Custom Keycaps:</span>{" "}
            Choose from a wide variety of keycap materials, colors, and designs
            to personalize your keyboard.
          </li>
          <li>
            <span className="font-bold text-[#247674]">
              RGB Lighting Control:
            </span>{" "}
            Fully customize your keyboard's RGB lighting effects to match your
            setup or mood.
          </li>
          <li>
            <span className="font-bold text-[#247674]">
              Layout Adjustability:
            </span>{" "}
            Reconfigure your keyboard’s layout to fit your typing style, with
            options for compact or full-sized setups.
          </li>
        </ul>
      </div>
    </div>
  );
}

// https://i.ibb.co.com/y0Q7wp5/customization.jpg
// https://i.ibb.co.com/pj5F5pN/CIDOO-V75-Pro-Matte-Switch-Linear.jpg
// https://i.ibb.co.com/7Chb3Ry/YUNZII-Keynovo-IF98-Pro-Tri-Mode-Wireless-Bluetooth-Hot-Swappable-Gasket-Mechanical-Gaming-Keyboard.jpg
// https://i.ibb.co.com/LCG32vL/4952-00.jpg
