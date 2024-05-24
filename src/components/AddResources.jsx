import { SignIn, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tagNames = [
  {
    name: "User",
    value: "user",
  },
  {
    name: "Request",
    value: "request",
  },
];

const AddResources = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    icon_url: "",
    link: "",
    description: "",
    category: "",
    tag: "",
  });

  const validateForm = () => {
    const { title, icon_url, link, description, category, tag } = formData;
    if (!title || !icon_url || !link || !description || !category || !tag) {
      toast.error("All fields are required.");
      return false;
    }
    if (title.length > 50) {
      toast.error("Title must be less than 50 characters.");
      return false;
    }
    if (link.length > 200 || icon_url.length > 200) {
      toast.error("Link and Icon URL must be less than 200 characters.");
      return false;
    }
    if (description.length > 500) {
      toast.error("Description must be less than 500 characters.");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const requestBody = { ...formData, id: new Date().getTime().toString() };
    console.log(requestBody, "requestBody");

    try {
      const response = await fetch(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        toast.success("Resource added successfully!");
        setFormData({
          title: "",
          icon_url: "",
          link: "",
          description: "",
          category: "",
          tag: "",
        });
      } else if (response.status === 400) {
        toast.error("Invalid request. Please check your data and try again.");
      } else {
        toast.error("Failed to add resource. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="h-screen grid place-items-center">
        <SignIn />
      </div>
    );
  }

  return (
    <div className="bg-[#fbfbfb] relative">
      <div className="fixed top-24 left-14 z-20 bg-white p-2 rounded-full cursor-pointer shadow-2xl">
        <div className="flex gap-1" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span className="text-xs font-semibold">Users</span>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 sm:px-6  lg:w-1/2 lg:px-8 py-12 lg:pt-20  order-2 lg:order-1">
          {/* py-12 sm:py-16 lg:py-24 */}
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-semibold sm:text-3xl">Item Details</h1>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-2"
          >
            <div>
              <label htmlFor="title" className="text-sm">
                Item Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm"
              />
            </div>
            <div>
              <label htmlFor="icon_url" className="text-sm">
                Icon URL
              </label>
              <input
                type="text"
                name="icon_url"
                placeholder="Icon URL"
                value={formData.icon_url}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm"
              />
            </div>
            <div>
              <label htmlFor="link" className="text-sm">
                Link
              </label>
              <input
                type="text"
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm"
              />
            </div>

            <div>
              <label htmlFor="category" className="text-sm">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm"
              />
            </div>
            <div>
              <label htmlFor="tag" className="text-sm">
                Tag
              </label>
              {/* <input
                type="text"
                name="tag"
                placeholder="Tag"
                value={formData.tag}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm"
              /> */}
              <select
                name="tag"
                id="tag"
                value={formData.tag}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm text-gray-500"
              >
                <option value="" className="">
                  choose tag name
                </option>
                {tagNames.map((tagName) => (
                  <option key={tagName.value} value={tagName.value}>
                    {tagName.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2.5 text-sm"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-700 text-white rounded"
            >
              CREATE
            </button>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 order-1 lg:order-2 mt-16">
          <img
            alt="Add details"
            src="/assets/addDetails_Img.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AddResources;
