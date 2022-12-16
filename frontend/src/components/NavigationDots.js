import React from "react";
const links = ["home", "about", "work", "skills", "contact"];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {links.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={
            active === item ? { backgroundColor: "var(--secondary-color)" } : {}
          }
        />
      ))}
    </div>
  );
};

export default NavigationDots;
