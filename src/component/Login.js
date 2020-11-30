import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input type="email" name="email" />
        <label>password</label>
        <input type="password" name="password" />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}
