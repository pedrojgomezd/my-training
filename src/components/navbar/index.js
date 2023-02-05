export const NavBar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-center mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://img.favpng.com/8/25/0/fitness-centre-ico-physical-fitness-icon-png-favpng-0EVJtkBCbU6x2B1hFzfUi3QPQ.jpg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            My Training
          </span>
        </a>
      </div>
    </nav>
  );
};
