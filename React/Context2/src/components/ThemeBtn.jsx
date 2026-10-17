import React from 'react'
import useTheme from '../context/Theme'


function ThemeBtn() {

    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus)
        {
            darkTheme()
        }else{
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />

            <div className="w-11 h-6 bg-gray-200 rounded-full
                peer-checked:bg-blue-600
                after:content-['']
                after:absolute
                after:top-0.5
                after:left-0.5
                after:w-5
                after:h-5
                after:bg-white
                after:rounded-full
                after:transition-all
                peer-checked:after:translate-x-5">
            </div>

            <span className="ml-3 text-sm font-medium text-gray-900">
                Toggle Theme
            </span>
        </label>
    )
}

export default ThemeBtn