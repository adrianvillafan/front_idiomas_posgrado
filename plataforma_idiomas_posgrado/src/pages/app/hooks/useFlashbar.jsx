import React, { createContext, useContext, useState } from 'react';

const FlashbarContext = createContext();

export const useFlashbar = () => {
    return useContext(FlashbarContext);
};

export const FlashbarProvider = ({ children }) => {
    const [flashbarItems, setFlashbarItems] = useState([]);

    const generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const FlashbarItems = {
        update: (newFlashbarItems) => {
            if (Array.isArray(newFlashbarItems)) {
                const itemsWithUniqueIds = newFlashbarItems.map(item => {
                    let id = item.id || generateId();
                    while (flashbarItems.some(existingItem => existingItem.id === id)) {
                        id = generateId();
                    }
                    return { 
                        ...item, 
                        id,
                        onDismiss: () => FlashbarItems.dismiss(id)
                    };
                });
                setFlashbarItems((prevItems) => [...prevItems, ...itemsWithUniqueIds]);
            } else {
                console.error("FlashbarItems.update expects an array");
            }
        },
        dismiss: (id) => {
            setFlashbarItems((prevItems) => prevItems.filter(item => item.id !== id));
        },
        clear: () => {
            setFlashbarItems([]);
        }
    };

    return (
        <FlashbarContext.Provider value={{ flashbarItems, FlashbarItems }}>
            {children}
        </FlashbarContext.Provider>
    );
};