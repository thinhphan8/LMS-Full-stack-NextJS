export default function logOutButton() {
    return (
        <form action="/auth/sign-out" method="post">
            <button>Log Out</button>
        </form>
    );
}