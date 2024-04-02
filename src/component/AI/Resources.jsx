import React from 'react'

const Resources = () => {
  return (
    <div className="mx-auto max-w-5xl grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch px-4 md:px-6">
    <div className="border rounded-lg flex-1 overflow-hidden">
      <div className="p-4 grid gap-2">
        <h4 className="text-sm font-semibold leading-none">Customer satisfaction</h4>
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The product is good, but it took a long time to arrive. I wish the shipping was faster.
        </p>
      </div>
    </div>
    <div className="border rounded-lg flex-1 overflow-hidden">
      <div className="p-4 grid gap-2">
        <h4 className="text-sm font-semibold leading-none">Customer satisfaction</h4>
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The product is good, but it took a long time to arrive. I wish the shipping was faster.
        </p>
      </div>
    </div>
    <div className="border rounded-lg flex-1 overflow-hidden">
      <div className="p-4 grid gap-2">
        <h4 className="text-sm font-semibold leading-none">Customer satisfaction</h4>
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The product is good, but it took a long time to arrive. I wish the shipping was faster.
        </p>
      </div>
    </div>
    <div className="border rounded-lg flex-1 overflow-hidden">
      <div className="p-4 grid gap-2">
        <h4 className="text-sm font-semibold leading-none">Customer satisfaction</h4>
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-primary" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The product is good, but it took a long time to arrive. I wish the shipping was faster.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Resources
function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
