using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARGENTRADER.Migrations
{
    /// <inheritdoc />
    public partial class otherChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Operation",
                type: "int",
                nullable: false,
                defaultValue: 0);

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Operation_User_UserId",
                table: "Operation");

            migrationBuilder.DropIndex(
                name: "IX_Operation_UserId",
                table: "Operation");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Operation");
        }
    }
}
