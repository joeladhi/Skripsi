<template>
    <nav class="px-6 py-8 md:flex md:justify-start md:items-center bg-main">
        <div class="flex items-end justify-between ">
            <NuxtLink to="/" class="text-xl font-bold text-white md:text-5xl txt-second pr-12"
                style="font-family: 'ABeeZee';font-style: 'italic';">
                Logo
            </NuxtLink>
        </div>
        <ul
            class="flex-col flex items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <NuxtLink to="/">
                <li class="text-gray-100 txt-second">Home</li>
            </NuxtLink>
            <NuxtLink to="/visualisasi">
                <li class="text-gray-100 txt-second">Visualisasi</li>
            </NuxtLink>
            <NuxtLink to="/about">
                <li class="text-gray-100 txt-second">About Us</li>
            </NuxtLink>
        </ul>
    </nav>
</template>