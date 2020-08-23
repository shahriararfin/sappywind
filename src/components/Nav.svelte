<script>
  export let segment;
</script>

<section
  class="mb-1 flex flex-col justify-center items-center shadow bordered
  text-gray-700">

  <h2
    class="py-1 text-teal-500 text-3xl font-bold tracking-wide cursor-pointer">
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      Sappywind
    </a>
  </h2>

  <nav class="border-t w-full flex justify-center items-center">
    <ul class="py-3 inline-flex items-center justify-center">
      <li class="mr-12">
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          Home
        </a>
      </li>
      <li class="mr-12">
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          About
        </a>
      </li>
      <li class="">
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          Blog
        </a>
      </li>
    </ul>
  </nav>
</section>
