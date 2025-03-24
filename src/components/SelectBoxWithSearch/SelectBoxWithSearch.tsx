import React, { useState } from 'react';
import {
    Dropdown,
    DropdownItem,
    SearchBoxWrapper,
} from './SelectBoxWithSearch.style';
import { SelectProps, Option } from './SelectBoxWithSearch.types';

import { TextInput as SelectInput } from '../TextInput';
import { FormWrapper } from '../Form';
import { IconButton, IconWrapper } from '../Icon';

import { FaMagnifyingGlass, FaRegCircleXmark } from 'react-icons/fa6';

export const SelectBoxWithSearch: React.FC<SelectProps> = ({ options, onSelect, placeholder }) => {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const filtered = options.filter(option =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (option: Option) => {
        setQuery(option.label);
        setShowDropdown(false);
        setSelectedIndex(-1);
        onSelect(option);
    };

    const handleClear = () => {
        setQuery('');
        setSelectedIndex(-1);
        setShowDropdown(false);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (filtered.length > 0) {
            handleSelect(filtered[0]);
        }
    };

    return (
        <SearchBoxWrapper>
            <FormWrapper onSubmit={handleSearchSubmit}>
                <>
                    <SelectInput
                        type="text"
                        value={query}
                        placeholder={placeholder || 'Select an option'}
                        onFocus={() => setShowDropdown(true)}
                        onChange={(e) => setQuery(e.target.value)}
                        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                    />

                    <IconWrapper>
                        {query && (
                            <IconButton type="button" onClick={handleClear} label="Clear Input">
                                <FaRegCircleXmark />
                            </IconButton>
                        )}
                        <IconButton type="submit" label="Search Currency Pair">
                            <FaMagnifyingGlass />
                        </IconButton>
                    </IconWrapper>
                </>
            </FormWrapper>

            {showDropdown && (
                <Dropdown>
                    {filtered.length > 0 ? (
                        filtered.map((option, idx) => (
                            <DropdownItem
                                key={option.value}
                                isSelected={idx === selectedIndex}
                                onMouseDown={() => handleSelect(option)}
                            >
                                {option.label}
                            </DropdownItem>
                        ))
                    ) : (
                        <DropdownItem isSelected={false}>No results found</DropdownItem>
                    )}
                </Dropdown>
            )}
        </SearchBoxWrapper>
    );
};
