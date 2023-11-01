using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARGENTRADER.Migrations
{
    /// <inheritdoc />
    public partial class changes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Operation_User_UserId",
                table: "Operation");

            migrationBuilder.DropForeignKey(
                name: "FK_Wallet_User_User_Id",
                table: "Wallet");

            migrationBuilder.DropIndex(
                name: "IX_Wallet_User_Id",
                table: "Wallet");

            migrationBuilder.DropIndex(
                name: "IX_Operation_UserId",
                table: "Operation");

            migrationBuilder.DropColumn(
                name: "User_Id",
                table: "Wallet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Operation");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "User_Id",
                table: "Wallet",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Operation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Wallet_User_Id",
                table: "Wallet",
                column: "User_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Operation_UserId",
                table: "Operation",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Operation_User_UserId",
                table: "Operation",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Wallet_User_User_Id",
                table: "Wallet",
                column: "User_Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
