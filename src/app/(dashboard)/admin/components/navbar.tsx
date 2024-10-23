import React from "react";

export default function AdminNavbar() {
  return (
    <header className="z-40 py-2 bg-white shadow-md fixed sm:sticky top-0 left-0 w-full">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-deep-purple">
        <button
          className="p-3 rounded-md md:hidden focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex items-center">
          <span className="hidden md:flex lg:flex px-2 font-dmsans font-bold text-lg lg:text-xl text-gray-700">
            title
          </span>
        </div>
        <div className="relative items-center font-poppins font-semibold text-[11px] md:text-xs lg:text-[13px] text-gray-500">
          <a
            href="
      @if (Auth::check()) @switch(Auth::user()->role)
              @case('admin')
                {{ route('admin.profile') }}
                @break

              @case('operator')
                {{ route('operator.profile') }}
                @break
              @endswitch
            @else
            {{ route('#') }} @endif"
          >
            <button className="flex hover:bg-blue-500/5 p-1 rounded-md items-center">
              <div className="flex flex-col items-start">
                <div>
                  {/* @if (Auth::check())
                {{ Auth::user()->name }}
              @endif */}
                </div>
                <div>
                  {/* @if (Auth::check())
                {{ Auth::user()->email }}
              @endif */}
                </div>
              </div>
              <div className="px-3 py-2 mx-2 bg-blue-100 rounded-md text-blue-500">
                {/* @if (Auth::check())
              <?php $initial = strtoupper(substr(Auth::user()->name, 0, 1)); ?>
              {{ $initial }}
            @endif */}
              </div>
            </button>
          </a>
          {/* {{-- <span className="relative px-2 mx-2 ">
        Hi, @if (Auth::check())
          {{ Auth::user()->name }}
        @endif
      </span> --}} */}
        </div>
      </div>
    </header>
  );
}
