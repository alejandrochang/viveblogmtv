import React, { useState } from 'react';

const SideNavigation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Sold Out');

  return (
    <div className='side-navigation'>
      {selectedItem}
      {/* Add your side navigation content here */}
    </div>
  );
};

export default SideNavigation;
