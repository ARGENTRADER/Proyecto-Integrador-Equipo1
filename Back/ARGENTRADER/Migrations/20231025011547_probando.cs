using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARGENTRADER.Migrations
{
    /// <inheritdoc />
    public partial class probando : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id_User",
                table: "Wallet",
                newName: "User_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Wallet_User_Id",
                table: "Wallet",
                column: "User_Id",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Wallet_User_User_Id",
                table: "Wallet",
                column: "User_Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wallet_User_User_Id",
                table: "Wallet");

            migrationBuilder.DropIndex(
                name: "IX_Wallet_User_Id",
                table: "Wallet");

            migrationBuilder.RenameColumn(
                name: "User_Id",
                table: "Wallet",
                newName: "Id_User");
        }
    }
}
