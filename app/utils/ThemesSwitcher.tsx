// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { BiMoon, BiSun } from "react-icons/bi";

// const ThemesSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const [theme, setTheme] = useState();

//   useEffect(() => setMounted(true), []);
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div className="flex items-center justify-center mx-4">
//       {theme === "light" ? (
//         <BiMoon
//           className="cursor-pointer"
//           fill="black"
//           size={25}
//           onClick={() => {
//             setTheme("dark");
//           }}
//         />
//       ) : (
//         <BiSun
//           className="cursor-pointer"
//           fill="black"
//           size={25}
//           onClick={() => {
//             setTheme("light");
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ThemesSwitcher;
// Ensure you import 'useState' and 'useEffect' from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemesSwitcher = () => {
  // Retrieve the current theme using the 'useTheme' hook
  const { theme, setTheme } = useTheme();

  // Use state to track whether the component has mounted or not
  const [mounted, setMounted] = useState(false);

  // Use effect to set 'mounted' to true once the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component is not mounted yet, return null
  if (!mounted) {
    return null;
  }

  // Render the theme switcher button based on the current theme
  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer "
          fill="black"
          size={25}
          onClick={() => {
            // Call 'setTheme' to switch to the dark theme
            setTheme("dark");
          }}
        />
      ) : (
        <BiSun
          className="cursor-pointer text-white"
          size={25}
          filter="white"
          onClick={() => {
            // Call 'setTheme' to switch to the light theme
            setTheme("light");
          }}
        />
      )}
    </div>
  );
};

export default ThemesSwitcher;
