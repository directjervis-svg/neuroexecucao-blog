'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          activeCategory === 'all'
            ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
        }`}
      >
        Todos
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            activeCategory === category
              ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
