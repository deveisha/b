// SignupForm.js
import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { signupRequest,signupFailure,signupSuccess } from '../../redux/AuthSlice';

const SignupForm = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const dispatch=useDispatch()
   const loading=useSelector((state)=>state.auth.loading)
   const error=useSelector((state)=>state.auth.error)
   const handleSignup = async (e) => {
      e.preventDefault();
      dispatch(signupRequest());
  
      try {
        const response = await axios.post("http://localhost:3001/signup", {
          email,
          password,
        });
  
        if (response && response.status === 200) {
          console.log("Successfully Sign Up");
           alert("User SignUp Successfully");
          console.log("server data ====>", response.data);
          dispatch(signupSuccess(response.data.user));
         //  navigate("/login");
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
         //  toast.error("Signup failed. Please try again.");
        } else {
          console.log("Failed to Sign Up");
           dispatch(signupFailure(error.response.data.error));
          dispatch(signupFailure(error.response.data.message));
        }
      }
    };
    



   return (
      // <div>
      //    <h2>Signup</h2>
      //    <form>
      //       <label>Username:</label>
      //       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      //       <label>Password:</label>
      //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      //       <button type="button" disabled={loading} onClick={handleSignup}>Signup</button>
      //    </form>
      //    {error && <p className="mt-5 text-red-500">{error}</p>}
      // </div>
      
<div class="h-full bg-gray-400 dark:bg-gray-900">
	
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
			
		
			
    
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								{/* <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                    First Name
                                </label> */}
								{/* <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                /> */}
							</div>
							{/* <div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                    Last Name
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
							</div> */}
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
						</div>
						<div class="mb-4 ">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Password
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    
                                />
								<p class="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							
						</div>
						<div class="mb-6 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="button"
                                disabled={loading} onClick={handleSignup}
                            >
                                Register Account
                            </button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#">
								Forgot Password?
							</a>
						</div>
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="./index.html">
								Already have an account? Login!
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
   );
};

export default SignupForm;
