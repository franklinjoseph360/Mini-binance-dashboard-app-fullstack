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

export const SelectBoxWithSearch: React.FC<SelectProps> = ({
    options,
    onSelect,
    placeholder,
}) => {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    if (!options?.length) return null;

    const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleClear = () => {
        setQuery('');
        setSelectedOption(null);
        setShowDropdown(false);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedOption) {
            onSelect(selectedOption);
        } else if (filtered.length > 0) {
            onSelect(filtered[0]);
        }
        setShowDropdown(false);
    };

    const handleOptionMouseDown = (option: Option) => {
        setQuery(option.label);
        setSelectedOption(option);
        // Do not call onSelect here
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
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedOption(null);
                        }}
                        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                    />

                    <IconWrapper>
                        {query && (
                            <IconButton type="button" onClick={handleClear} label="Clear Input">
                                <FaRegCircleXmark />
                            </IconButton>
                        )}
                        <IconButton type="submit" label="Search Currency Pair" shouldDisable={!selectedOption}>
                            <FaMagnifyingGlass />
                        </IconButton>
                    </IconWrapper>
                </>
            </FormWrapper>

            {showDropdown && (
                <Dropdown>
                    {filtered.length > 0 ? (
                        filtered.map((option) => (
                            <DropdownItem
                                key={option.value}
                                onMouseDown={() => handleOptionMouseDown(option)}
                            >
                                {option.label}
                            </DropdownItem>
                        ))
                    ) : (
                        <DropdownItem>No results found</DropdownItem>
                    )}
                </Dropdown>
            )}
        </SearchBoxWrapper>
    );
};
