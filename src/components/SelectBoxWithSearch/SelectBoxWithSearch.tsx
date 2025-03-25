import React, { useState, useRef } from 'react';
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
    const inputRef = useRef<HTMLInputElement>(null);

    if (!options?.length) return null;

    const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleClear = () => {
        setQuery('');
        setSelectedOption(null);
        setShowDropdown(false);
        inputRef.current?.focus();
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
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const dropdownId = 'currency-options-dropdown';

    return (
        <SearchBoxWrapper data-testid="search-box-testid">
            <FormWrapper onSubmit={handleSearchSubmit}>
                <>
                    <SelectInput
                        ref={inputRef}
                        type="text"
                        value={query}
                        name="currency-search"
                        placeholder={placeholder || 'Select an option'}
                        onFocus={() => setShowDropdown(true)}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedOption(null);
                        }}
                        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                        aria-controls={dropdownId}
                        aria-expanded={showDropdown}
                        aria-autocomplete="list"
                        required
                    />

                    <IconWrapper>
                        {query && (
                            <IconButton
                                type="button"
                                onClick={handleClear}
                                label="Clear Currency Input"
                                aria-label="Clear Currency Input"
                            >
                                <FaRegCircleXmark />
                            </IconButton>
                        )}
                        <IconButton
                            type="submit"
                            label="Search Currency Pair"
                            aria-label="Search Currency Pair"
                            disabled={!selectedOption}
                        >
                            <FaMagnifyingGlass />
                        </IconButton>
                    </IconWrapper>
                </>
            </FormWrapper>

            {showDropdown && (
                <Dropdown id={dropdownId} role="listbox" aria-label="Currency suggestions">
                    {filtered.length > 0 ? (
                        filtered.map((option) => (
                            <DropdownItem
                                key={option.value}
                                onMouseDown={() => handleOptionMouseDown(option)}
                                role="option"
                                aria-selected={option.label === selectedOption?.label}
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
